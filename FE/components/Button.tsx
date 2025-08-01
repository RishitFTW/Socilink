import React, { ReactElement } from 'react'

interface ButtonProps{
    variant: "primary || secondary",
    startIcon: ReactElement,
    title: String
}

function Button(props) {
  return (
    <div>Button</div>
  )
}

export default Button