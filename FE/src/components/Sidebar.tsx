
import AppIcon from './AppIcon'
import SidebarItem from './SidebarItem'
import NotesIcon from './NotesIcon'
import CamerIcon from '../icons/CamerIcon'
import Dox from '../icons/Dox'
import AllNotesIcon from '../icons/AllNotesIcon'
function Sidebar() {
  return (
    <div className='w-[255px] border-r border-gray-200 h-screen'>
        <div className='flex justify-center items-center gap-x-3 p-5 pb-5 pl-2 border-gray-200'>
          <div>
            <AppIcon/>
          </div>
          <div className='text-xl font-bold'>
            Socilink
          </div>
        </div>
        <div className='pt-16'>
          <SidebarItem title="All Notes" selected={true} startIcon={<AllNotesIcon/>}/>
          <SidebarItem title="Tweets" selected={false} startIcon={<NotesIcon/>}/>
          <SidebarItem title="Videos" selected={false} startIcon={<CamerIcon/>}/>
          <SidebarItem title="Documents" selected={false} startIcon={<Dox/>}/>
          <SidebarItem title="Links" selected={false} startIcon={<Dox/>}/>
          <SidebarItem title="Tags" selected={false} startIcon={<Dox/>}/>
        </div>

    </div>
  )
}

export default Sidebar