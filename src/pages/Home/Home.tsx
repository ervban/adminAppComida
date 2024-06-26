import ResponsiveAppBar from '@/components/Appbar/Appbar'
import React from 'react'
import { Outlet } from 'react-router'

export default function Home() {
  return (
    <>
    
    <ResponsiveAppBar/>
    <div className='contenido'>
      <Outlet />
    </div>
    </>
  )
}
