import React from 'react'

interface TitleProps {
    children:(React.JSX.Element | string)[] | string | React.JSX.Element | undefined
}

export default function Title({children}:TitleProps) {
  return (
    <h1 className="font-bold text-4xl md:text-5xl relative flex place-items-center title">{children}</h1>
  )
}
