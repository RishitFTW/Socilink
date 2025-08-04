import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
   
    const navigate= useNavigate();
   const [formData, setData]=useState({
    username:"",
    password:""
   })
   
   const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();
    try {
        const response= await fetch('http://localhost:3000/api/v1/auth/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData)
        })
        if(!response.ok){
            alert('Error loggin in')
            return;
        }
        const responseData= await response.json();
        localStorage.setItem('authToken',responseData.token);

        // navigate to /dashboard
    } catch (error) {
        
    }
   }

  return (
    <div className="w-full h-screen  bg-gray-300 flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-purple-600 px-6 py-4">
          <h2 className="text-lg font-semibold text-purple-800">Login</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-4 flex flex-col gap-4">
          {/* Username */}
          <div>
            <label className="block text-sm text-purple-800 mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={(e)=>setData({...formData,[e.target.name]:e.target.value})}
              className="w-full border border-purple-500 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-purple-800 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e)=>setData({...formData,[e.target.name]:e.target.value})}
              className="w-full border border-purple-500 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold py-2 rounded w-full"
          >
            Submit
          </button>
          <div className="text-sm pl-22 text-gray-500">
            Dont have an account? Signup
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
