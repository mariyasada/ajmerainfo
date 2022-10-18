import { createContext,useContext, useState,useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { ascendingUser } from "../Components/Utils/utils";
import { addUserData } from "../Services/addUser";
import { getUserData } from "../Services/getUserData";
import { userDataReducer } from "./UserReducer";



const UserContext =createContext();

const initialState={
    users:[],
    currentCategory:""
}

const UserDataProvider =({children})=>{
    const [state,dispatch]=useReducer(userDataReducer,initialState);
    const[data,setData]=useState([]);
    const [userData,setUserData]=useState({email: "", first_name: "", last_name: ""})
    
    useEffect(()=>{     
         (async()=>{
          const users=await getUserData();   
          dispatch({type:"LOAD_USERS",payload:users.data})
          
        })();
    },[])

    const addUser=async(user)=>{
        const response=await addUserData(user);
        dispatch({type:"ADD_USER",payload:response})
        toast("user added successfully",{icon:"✔"});
    }

    const newState=ascendingUser(state);
    
    return <UserContext.Provider value={{state,dispatch,data,setData,userData,setUserData,addUser}}>{children}</UserContext.Provider>
}

const useUserData =()=>useContext(UserContext);

export{useUserData,UserDataProvider};