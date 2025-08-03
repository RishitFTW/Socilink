
import AppIcon from './AppIcon'
import SidebarItem from './SidebarItem'
import NotesIcon from './NotesIcon'
import CamerIcon from '../icons/CamerIcon'
import AllNotesIcon from '../icons/AllNotesIcon'
import { useState } from 'react'
import Bell from '../icons/Bell'
import Camera from '../icons/Camera'
import Link from '../icons/Link'

function Sidebar() {
  
  const [selected, setSelected]= useState("All Notes");

 const menuItems=[
   {title:"All Notes",icon:<AllNotesIcon/>},
   {title:"Tweets", icon:<NotesIcon/>},
   {title:"Videos", icon:<CamerIcon/>},
   {title:"Instagram", icon:<Camera/> },
   {title:"Linkedin", icon:<Link/>},
   {title:"Facebook", icon:<Bell/>}
 ]


  return (
    <div className='fixed top-0 left-0 w-[255px] h-screen border-r border-gray-200 bg-white z-50' >
        <div className='flex justify-center items-center gap-x-3 p-5 pb-5 pl-2 border-gray-200'>
          <div>
            <AppIcon/>
          </div>
          <div className='text-xl font-bold'>
            Socilink
          </div>
        </div>
        <div className='pt-16'>
           {menuItems.map(({title,icon})=>(
            <div key={title}onClick={()=>{setSelected(title)}}>
               <SidebarItem title={title} selected={selected==title} startIcon={icon}/>
            </div>
           ))}
          
        </div>

    </div>
  )
}

export default Sidebar