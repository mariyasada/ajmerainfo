import './App.css';
import { FilterData } from './Components/FilterData';
import Header from './Components/Header';
import { Users } from './Components/UseData/Users';
import { Toaster } from "react-hot-toast";
import { useTheme } from './context/themeContext';

function App() {
  const {theme}=useTheme();
  return (
    <div className="App" style={{backgroundColor:theme==="light"?"black":"white"}}>
      <Header/>
      <Users/>
      <Toaster
        position="top-center"
        toastOptions={{ className: "toast-display", duration: 3000 }}
      />    
    </div>
  );
}

export default App;
