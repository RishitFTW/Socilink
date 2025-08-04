
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {

  const [isCheckingAuth,setAuth]= useState(false);

  const navigate= useNavigate();
  useEffect(()=>{
    setAuth(true);
    const token=localStorage.getItem('authToken');
    if(!token){
        navigate('/signup')
        return;
    }
    setAuth(false);

  },[])

  return <BrowserRouter>
       <Routes>
         <Route path="/" element={<Dashboard/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/signin" element={<Login/>}/>
       </Routes>
   </BrowserRouter>
}

export default App
