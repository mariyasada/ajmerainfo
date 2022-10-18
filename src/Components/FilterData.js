import { Button } from '@mui/material'
import React from 'react'
import { useTheme } from '../context/themeContext';
import { useUserData } from '../context/UserContext';
import { TableBodyData } from './UseData/TableBody';
import { acsendingUser, descendingOrder } from './Utils/utils';


export const FilterData = () => {
    const {state,dispatch,data,setData}=useUserData();
    const {theme}=useTheme();
    const {users}=state;

  return (
    <div className='btn-container flex-center space-between' style={{backgroundColor:theme==="light"?"black":"white"}} >
       <Button variant="contained" color="secondary" onClick={()=>dispatch({type:"ASCENDING",payload:"Ascending"})}>Ascending</Button>
       <Button variant="contained" color="primary"  onClick={()=>dispatch({type:"DESCENDING",payload:"Descending"})}>Descending</Button>
    
    </div>
  )
}


