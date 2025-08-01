import React, { type ReactElement } from 'react'

interface ButtonProps{
    variant: "primary" | "secondary",
    startIcon:ReactElement,
    text:String
}

const variantClasses={
    "primary":"bg-[#E0E7FF] rounded-md px-4 py-2",
    "secondary":"bg-[#7926D1] rounded-md px-4 py-2 text-white font-medium"
}

function Button({variant,text,startIcon}:ButtonProps) {
  return (
    <button className={variantClasses[variant]+` flex items-center gap-x-2 text-sm`}>
        <div>
            {startIcon}
        </div>
        {text}</button>
  )
}

export default Button