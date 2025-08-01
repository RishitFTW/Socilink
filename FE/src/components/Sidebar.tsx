
import AppIcon from './AppIcon'
import SidebarItem from './SidebarItem'
import ShareIcon from '../icons/ShareIcon'
import NotesIcon from './NotesIcon'
import CamerIcon from '../icons/CamerIcon'
import Dox from '../icons/Dox'
import AllNotesIcon from '../icons/AllNotesIcon'
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
        <div className='pt-16'>
          <SidebarItem title="All Notes" startIcon={<AllNotesIcon/>}/>
          <SidebarItem title="Tweets" startIcon={<NotesIcon/>}/>
          <SidebarItem title="Videos" startIcon={<CamerIcon/>}/>
          <SidebarItem title="Documents" startIcon={<Dox/>}/>
        </div>

    </div>
  )
}

export default Sidebar