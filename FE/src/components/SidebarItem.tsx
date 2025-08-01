import React from 'react'
import ShareIcon from '../icons/ShareIcon'

function SidebarItem() {
  return (
    <div className='bg-red-200 px-2 py-1 mt-12'>
        <div className='flex items-center bg-amber-200 rounded-lg p-2'>
            <div>
              <ShareIcon/>
            </div>
            <div>
              All notes
            </div>
        </div>
    </div>
  )
}

export default SidebarItem