
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../config';

function Signup() {

    const [formData, setData]= useState({
        username:"",
        password:""
    });
    const navigate= useNavigate();
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        try {
            const response = await axios.post(
            `${API_BASE_URL}api/v1/auth/signup`,
            formData,
            {
                headers: {
                'Content-Type': 'application/json',
                }
            }
            );
            const responseData = response.data;
            localStorage.setItem('authToken', responseData);
            
            toast.success('signed in successfully')
            navigate('/');

        } catch (error) {
           toast.error('Failed to sign up. Please try again.');
        }
    }

  return (
    <div className="w-full h-screen  bg-gray-300 flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-purple-600 px-6 py-4">
          <h2 className="text-lg font-semibold text-purple-800">Signup</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-4 flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-purple-800 mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
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
              value={formData.password}
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
          <div className="text-sm pl-26 text-gray-500">
             Have an account? <span onClick={()=>{navigate('/')}} className="text-blue-500 underline hover:text-blue-700 cursor-pointer">Login</span>
          </div>          
        </form>
      </div>
    </div>
  );
}

export default Signup;
