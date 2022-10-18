import axios from "axios";
export const addUserData=async(user)=>{
        try { 
        const {data}= await axios.post("https://reqres.in/api/users",user)
        return data;
    }
    catch{
        console.error('could not perform the request');
    }
}