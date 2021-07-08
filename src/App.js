import {useEffect} from 'react'
import { Route, Routes } from "react-router";
import { SignUp,SignIn,Home} from "./pages";
import { useNavigate } from 'react-router';

import './App.css'
const App=()=> {
  const navigate = useNavigate()
  useEffect(()=>{
    
    let  userData = JSON.parse(localStorage.getItem("login"))
    
    if(userData){
      navigate("/")
    }else{
      navigate("/sign-in")
    }
   
  },[])
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
     
    </div>
  );
}

export default App;
