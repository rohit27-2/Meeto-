import { Button } from '@/components/ui/button'
import { BriefcaseIcon, Calendar, Clock, Plus, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNavBar() {
    const menu = [
        {
            id:1,
            name: 'Meeting Type',
            path: 'dashboard/meeting-type',
            icon: BriefcaseIcon
        },
        {
            id:2,
            name: 'Scheduled Meeting',
            path: 'dashboard/schedule-meeting',
            icon: Calendar
        },
        {
            id:3,
            name: 'Availability ',
            path: 'dashboard/availability',
            icon: Clock
        },
        {
            id:4,
            name: 'Settings ',
            path: 'dashboard/Settings',
            icon: Settings
        }
    ]
  return (
    <div className='p-5 py-8'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} width={150} height={150} alt='logo' />

        </div>
        <div>
            <Button className='flex gap-2 w-full rounded-full mt-7'><Plus /> Create</Button>
        </div>
        <div className='mt-5 flex flex-col gap-5'>
            {menu.map((item, index)=> (
                <Button key={index} variant="ghost" className='w-full flex gap-2 justify-start hover:bg-blue-100'><item.icon />{item.name}</Button>
            ))}
        </div>

    </div>
  )
}

export default SideNavBar