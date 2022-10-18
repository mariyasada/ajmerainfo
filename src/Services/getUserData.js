import axios from "axios";
export const getUserData=async()=>{
        try { 
        const {data}= await axios.get("https://reqres.in/api/users")
        return data;
    }
    catch{
        console.error('could not perform the request');
    }
}