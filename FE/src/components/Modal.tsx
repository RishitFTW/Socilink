import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

interface ModalProps{
  onClose:()=>void,
  onSuccess:()=>void
}

function Modal({onClose, onSuccess}:ModalProps) {

  const [formData, setData]= useState({
    title:"",
    link:"",
    type:""
  })

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    try {
       const token= localStorage.getItem('authToken')
       const res= await axios.post("http://localhost:3000/api/v1/check/content",
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
    <div className='absolute top-0 left-0 w-full h-full bg-gray-300/94 flex justify-center items-center z-50'>
      <div className='bg-white w-[400px] h-[450px] rounded '>
        {/* header */}
          <div className="flex justify-between items-center border-b border-indigo-700 px-6 py-4">
            <h2 className="text-xl font-semibold text-indigo-700">Contact Form</h2>
            <button onClick={onClose} className="text-indigo-700 hover:text-gray-600 text-2xl font-bold cursor-pointer">&times;</button>
          </div>
          <form onSubmit={handleSubmit} className='px-6 py-4 space-y-4'>
            {/* title */}
            <div>
              <label htmlFor='name' className='block text-sm font-semibold mb-1 text-indigo-700'>Title</label>
              <input
                id='name'
                name='title'
                type='text'
                placeholder='Enter the type'
                value={formData.title}
                onChange={(e)=>setData({...formData,[e.target.name]:e.target.value})}
                className='border text-indigo-700 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-indigo-500'
              />
            </div>

            {/* link */}
            <div>
              <label htmlFor='linkk' className='block text-sm font-semibold mb-1 text-indigo-700'>Link</label>
              <input
                id="linkk"
                name='link'
                type='text'
                placeholder='Enter the link'
                value={formData.link}
                onChange={(e)=>{setData({...formData,[e.target.name]:e.target.value})}}
                className='border text-indigo-700 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-indigo-500'
              />
            </div>

           {/* content-type */}
            <div>
             <label htmlFor="content" className="block text-sm font-semibold mb-1 text-indigo-700">Content</label>
             <select
               id='content'
               name='type'
              value={formData.type}
              onChange={(e) => setData({ ...formData, [e.target.name]: e.target.value })}               
               className='w-full border border-indigo-700 text-indigo-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
             >
             <option value='youtube'>youtube</option>
             <option value='instagram'>instagram</option>              
             <option value='x'>x</option>
             <option value='facebook'>facebook</option>
             <option value='pinterest'>pinterest</option>
             <option value='linkedin'>linkedin</option>
             </select>

             <div className='pt-12 flex items-center justify-center'>
              <button type='submit'
              className="bg-indigo-100 rounded-md px-4 py-2 cursor-pointer text-indigo-700 font-semibold border border-indigo-200 hover:bg-indigo-200">
                Submit
              </button>
             </div>

            </div>
          </form>
      </div>
    </div>
  )
}

export default Modal