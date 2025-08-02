import React, { type ReactElement } from 'react'
import ShareIcon from '../icons/ShareIcon'

interface SideItemProps{
    title:String,
    startIcon: ReactElement,
    selected:Boolean
}

function SidebarItem({title,startIcon,selected}:SideItemProps) {
  return (
    <div className=' px-4 py-0.5 cursor cursor-pointer hover:bg-slate-100'>
        <div className={`flex items-center p-3 pl-3 rounded-lg text-sm font-medium transition-all duration-200 group ${ selected===true ? "bg-indigo-50 text-indigo-700 border border-indigo-200" : ""}`}>
            <div>
              {startIcon}
            </div>
            <div className={`font-medium text-sm pl-4 ${selected===true? 'text-indigo-700':'' }`}>
              {title}
            </div>
        </div>
    </div>
  )
}

export default SidebarItem