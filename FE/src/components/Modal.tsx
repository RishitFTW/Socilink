
function Modal({onClose}:{onClose:()=>void}) {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-gray-300/94 flex justify-center items-center z-50'>
      <div className='bg-white w-[400px] h-[450px] rounded '>
        {/* header */}
          <div className="flex justify-between items-center border-b border-indigo-700 px-6 py-4">
            <h2 className="text-xl font-semibold text-indigo-700">Contact Form</h2>
            <button onClick={onClose} className="text-indigo-700 hover:text-gray-600 text-2xl font-bold cursor-pointer">&times;</button>
          </div>
          <form className='px-6 py-4 space-y-4'>
            {/* title */}
            <div>
              <label htmlFor='name' className='block text-sm font-semibold mb-1 text-indigo-700'>Name</label>
              <input
                id='name'
                type='text'
                placeholder='Enter the type'

                className='border text-indigo-700 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-indigo-500'
              />
            </div>

            {/* link */}
            <div>
              <label htmlFor='link' className='block text-sm font-semibold mb-1 text-indigo-700'>Link</label>
              <input
                id="link"
                type='text'
                placeholder='Enter the link'

                className='border text-indigo-700 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-indigo-500'
              />
            </div>

           {/* content-type */}
            <div>
             <label htmlFor="content" className="block text-sm font-semibold mb-1 text-indigo-700">Role</label>
             <select
               id='content'
               name='content'
               className='w-full border border-indigo-700 text-indigo-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
             >
             <option value='youtube'>Youtube</option>
             <option value='instagram'>Instagram</option>              
             <option value='x'>X</option>
             <option value='fb'>Facebook</option>
             <option value='pin'>Pinterest</option>
             <option value='linkedin'>Linkedin</option>
             </select>

             <div className='pt-12 flex items-center justify-center'>
              <button className="bg-indigo-100 rounded-md px-4 py-2 cursor-pointer text-indigo-700 font-semibold border border-indigo-200 hover:bg-indigo-200">
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