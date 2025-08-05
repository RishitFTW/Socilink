
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import SharedContent from './pages/SharedContent'

function App() {


  return <BrowserRouter>
       <Routes>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/" element={<Login/>}/>
         <Route path="/shared/:hash" element={<SharedContent/>} />
         <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>
      <ToastContainer position="top-center"/> 
   </BrowserRouter>
}

export default App
