import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { API_BASE_URL } from "../config"

interface ModalProps{
  onClose:()=>void,
  onSuccess:()=>void
}

function Modal({onClose, onSuccess}:ModalProps) {

  const [formData, setData]= useState({
    title:"",
    link:"",
    type:"youtube"
  })

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    try {
       const token= localStorage.getItem('authToken')
       console.log(formData)
       await axios.post(`${API_BASE_URL}api/v1/check/content`,
      formData,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )
    toast.success('Bookmark Added')
    onSuccess();
    onClose();   

    } catch (err) {
      console.error("Submission failed", err)      
      toast.error('Failed to add bookmark. Please try again.');
    }
    
  }




  return (

<div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

  <div className="bg-white rounded-2xl shadow-2xl w-[400px] p-6 relative border border-violet-200">
    

    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-violet-700">Contact Form</h2>
      <button onClick={onClose} className="text-gray-400 hover:text-violet-500 transition text-xl">&times;</button>
    </div>


    <hr className="border-violet-200 mb-4" />


    <form onSubmit={handleSubmit} className="space-y-4">
      

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
        <input 
                id='name'
                name='title'
                type='text'
                placeholder='Enter the type'
                value={formData.title}
                onChange={(e)=>setData({...formData,[e.target.name]:e.target.value})}
          className="w-full border border-violet-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Link</label>
        <input 
                id="linkk"
                name='link'
                type='text'
                placeholder='Enter the link'
                value={formData.link}
                onChange={(e)=>{setData({...formData,[e.target.name]:e.target.value})}}
          className="w-full border border-violet-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-400 focus:outline-none"
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Content</label>
        <select
               id='content'
               name='type'
              value={formData.type}
              onChange={(e) => setData({ ...formData, [e.target.name]: e.target.value })}              
          className="w-full border border-violet-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-400 focus:outline-none"
        >
          <option value="youtube">YouTube</option>
          <option value="instagram">Instagram</option>
          <option value="x">X (Twitter)</option>
          <option value="linkedin">LinkedIn</option>
          <option value="facebook">Facebook</option>
        </select>
      </div>


      <button 
        type="submit" 
        className="w-full bg-violet-500 hover:bg-violet-600 text-white font-medium py-2 rounded-lg shadow-md transition"
      >
        Submit
      </button>
    </form>
  </div>
</div>

  )
}

export default Modal