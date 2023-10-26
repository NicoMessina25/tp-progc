import { Label } from '@/components/Labels/Label/Label'
import React from 'react'

export interface LocationStatCardProps {
    title:string
    value?:string|number|undefined
    className?:string
    children?:React.ReactNode
}

export default function LocationStatCard({title,value,className="",children}:LocationStatCardProps) {
  return (
    <div className={`from-rickMortyDark/30 bg-gradient-to-b p-6 rounded-lg flex flex-col justify-center items-center ${className}`}>
        <Label text={title} className='text-xl text-center' />
        {value !== undefined && <p className='text-slate-100 text-7xl'>{value}</p>}
        {children}
    </div>
  )
}
