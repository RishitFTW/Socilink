import React from 'react'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import ShareIcon from '../icons/ShareIcon'
import AddIcon from '../icons/AddIcon'
import Card from '../components/Card'

function Dashboard() {
  return (
    <div className='flex'>
        <Sidebar/>
        <div>
            <div className='h-[80px] w-[1280px] flex border-b border-gray-200'>
                <div className='w-[66%] '>
                    <div className='text-2xl font-bold pl-72 pt-2'>Library</div>
                    <div className='pl-58 text-gray-400 text-sm pt-1'>All your bookmarks at one place</div>
                </div>
                <div className=' w-[34%] flex justify-center items-center'>
                    <div className='flex pl-8'>
                        <div>
                            <Button variant='primary'  startIcon={<ShareIcon/>} text="Share Brain"/>
                        </div>
                        <div className='pl-3'>
                            <Button variant='secondary'  startIcon={<AddIcon/>} text="Add Content"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[697px] bg-slate-100 p-3'>
                <Card title="X Content" type="X"/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard