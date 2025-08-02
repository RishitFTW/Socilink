import React, { type ReactElement } from 'react'

interface ButtonProps{
    variant: "primary" | "secondary",
    startIcon:ReactElement,
    text:String
}

const variantClasses={
    "primary":"bg-indigo-100 rounded-md px-4 py-2 cursor-pointer text-indigo-700 font-semibold border border-indigo-200 hover:bg-indigo-200",
    "secondary":"bg-indigo-600 rounded-md px-4 py-2 text-white font-medium cursor-pointer border border-indigo-200 hover:bg-indigo-700"
}

function Button({variant,text,startIcon}:ButtonProps) {
  return (
    <button className={variantClasses[variant]+` flex items-center gap-x-2 text-sm`}>
        <div>
            {startIcon}
        </div>
        <div>
            
        </div>
        {text}
        </button>
  )
}

export default Button