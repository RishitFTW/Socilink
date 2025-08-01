import React, { type ReactElement } from 'react'
import ShareIcon from '../icons/ShareIcon'

interface SideItemProps{
    title:String,
    startIcon: ReactElement
}

function SidebarItem({title,startIcon}:SideItemProps) {
  return (
    <div className=' px-2 py-0.5 '>
        <div className='flex items-center p-3 pl-3 rounded-lg text-sm font-medium transition-all duration-200 group bg-indigo-50 text-indigo-700 border border-indigo-200'>
            <div>
              {startIcon}
            </div>
            <div className='text-indigo-700 font-medium text-sm pl-4'>
              {title}
            </div>
        </div>
    </div>
  )
}

export default SidebarItem