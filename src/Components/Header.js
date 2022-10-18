import React,{useState} from 'react'
import { useTheme } from '../context/themeContext';
import {  FiSun} from "react-icons/fi";
import { FaMoon} from "react-icons/fa";
import { Button } from '@mui/material';
import { UserModal } from './Modal/UserModal';



const Header = () => {
const [isLight, setIsLight] = useState(false);
const { theme, setTheme } = useTheme();
const [isOpen,setIsOpen]=useState(false);

    const themeClickHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setIsLight(!isLight);
  };
  return (
    <nav  className={
        theme === "light"
          ? " Header-container-dark flex-center justify-content"
          : "header-container flex-center justify-content"
      }>
         <Button variant="outlined" sx={{margin:"auto"}} onClick={()=>setIsOpen(true)}>Add User</Button>
        <div>         
        {isLight ? (
          <FiSun onClick={themeClickHandler} className="icon" />
        ) : (
          <FaMoon onClick={themeClickHandler}  className="icon" />
        )}
        </div>
        {isOpen && <UserModal setIsOpen={setIsOpen}/>}
    </nav>
  )
}

export default Header
