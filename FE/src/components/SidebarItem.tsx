import React, { type ReactElement } from 'react'
import ShareIcon from '../icons/ShareIcon'

interface SidebarItemProps {
  title: string;
  startIcon: ReactElement;
  selected: boolean;
}

function SidebarItem({ title, startIcon, selected }: SidebarItemProps) {
  return (
    <div className="px-4 py-0.5 cursor-pointer hover:bg-slate-100">
      <div
        className={`flex items-center p-3 pl-3 rounded-lg text-sm font-medium 
          ${selected ? "bg-indigo-50 text-indigo-700 border border-indigo-200" : ""}`}
      >
        <div>{startIcon}</div>
        <div className={`font-medium text-sm pl-4 ${selected ? "text-indigo-700" : ""}`}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
