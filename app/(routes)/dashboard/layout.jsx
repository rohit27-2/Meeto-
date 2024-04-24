import React from 'react'
import SideNavBar from './_components/SideNavBar'

function DashboadLayout({children}) {
  return (
    <div>
        <div className='md:w-64 bg-slate-50 h-screen fixed'>
            <SideNavBar />
            
        </div>
        <div className='md:ml-64'>
        {children}
        </div>
        </div>
  )
}

export default DashboadLayout