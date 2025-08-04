
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import ShareIcon from '../icons/ShareIcon'
import AddIcon from '../icons/AddIcon'
import Card from '../components/Card'
import { useState } from 'react'
import Modal from '../components/Modal'

function Dashboard() {

  const [open, setOpen]= useState(false);

  return (
    <div>
            <div className='relative flex'>
                <Sidebar/>
                <div className='pl-[255px]'>
                    <div className='h-[80px] w-[1280px] flex border-b border-gray-200'>
                        <div className='w-[66%] '>
                            <div className='text-3xl font-semibold text-gray-900 flex items-center gap-2 pl-28 pt-2'>📚 Library </div>
                            <div className='pl-28 text-sm text-gray-500 pt-1'>All your bookmarks at one place</div>
                        </div>
                        <div className=' w-[34%] flex justify-center items-center'>
                            <div className='flex pl-8'>
                                <div>
                                    <Button variant='primary'  startIcon={<ShareIcon/>} text="Share Brain"/>
                                </div>
                                <div className='pl-3'>
                                    <Button onClick={() => setOpen(true)}  variant='secondary'  startIcon={<AddIcon/>} text="Add Content"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='min-h-[697px] w-[1280px] bg-slate-100 flex flex-wrap gap-x-6 gap-y-6 p-6'>
                            <Card title="Twitter Content" type="x"/>
                            <Card title="youtube Content" type="youtube"/>
                            <Card title="Instagram Content" type="instagram"/>
                            <Card title="facebook Content" type="fb"/>
                            <Card title="Pinterest Content" type="pinterest"/>
                            <Card title="Linkedin Content" type="linkedin"/>                    
                    </div>
                </div>
            </div>
            {open && <Modal onClose={()=>setOpen(false)}/>}
       </div>
  )
}

export default Dashboard