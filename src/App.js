import {useEffect} from 'react'
import { Route, Routes } from "react-router";
import { SignUp,Home} from "./pages";
import { useNavigate } from 'react-router';


const App=()=> {
  const navigate = useNavigate()
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("login"))
    if(userData.isUserLoggedIn){
      navigate("/")
    }
   
  },[])
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      </Routes>
     
    </div>
  );
}

export default App;
