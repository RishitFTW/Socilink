
import AppIcon from './AppIcon'
import SidebarItem from './SidebarItem'
import NotesIcon from './NotesIcon'
import CamerIcon from '../icons/CamerIcon'
import AllNotesIcon from '../icons/AllNotesIcon'
import { useEffect, useState } from 'react'
import Bell from '../icons/Bell'
import Camera from '../icons/Camera'
import Link from '../icons/Link'
import Button from './Button'
import LogoutIcon from '../icons/LogoutIcon'
import { useNavigate } from 'react-router-dom'

interface contents{
    _id:string,
    link:string,
    type:string,
    title:string
}

interface sideBarProps{
  contentData:contents[],
  setBookmarks: React.Dispatch<React.SetStateAction<contents[]>>;
}


function Sidebar({contentData,setBookmarks  }:sideBarProps) {
  
  const [selected, setSelected]= useState("All Notes");
  const navigate= useNavigate();

 const menuItems=[
   {title:"All Notes",icon:<AllNotesIcon/>},
   {title:"x", icon:<NotesIcon/>},
   {title:"youtube", icon:<CamerIcon/>},
   {title:"instagram", icon:<Camera/> },
   {title:"linkedin", icon:<Link/>},
   {title:"facebook", icon:<Bell/>}
 ]

 const filteredData=selected=='All Notes' ? contentData: contentData.filter((data)=>data.type==selected)

 useEffect(()=>{
   setBookmarks(filteredData)
 },[selected])

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
       <div className='mt-64 pl-18 pt-6 border-t border-gray-200'>
        <Button onClick={()=>{localStorage.removeItem('authToken'); navigate('/')}} startIcon={<LogoutIcon/>} variant="secondary" text='LogOut'/>
       </div>
    </div>
  )
}

export default Sidebar