import React from 'react'
import SidebarComponent from '../bar/sidebar'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen min-h-screen relative flex-1'>
      <SidebarComponent>
        <div className='w-full h-full flex px-5 bg-gray-200'>
          {children}
        </div>
      </SidebarComponent>
    </div>
  )
}
