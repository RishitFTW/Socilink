import React from 'react'
import AppIcon from './AppIcon'
import SidebarItem from './SidebarItem'

function Sidebar() {
  return (
    <div className='w-[255px] border-r border-gray-200'>
        <div className='flex justify-center items-center gap-x-3 p-5 pb-5 border-b border-gray-200'>
          <div>
            <AppIcon/>
          </div>
          <div className='text-xl font-bold'>
            Socilink
          </div>
        </div>
        <SidebarItem/>
    </div>
  )
}

export default Sidebar