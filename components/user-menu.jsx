"use client"

import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
  return (
    <div>
        <UserButton
        appearance={{
            elements:{
                avatarBox:"w-10 h-10",
            },
        }}>
            <UserButton.MenuItems>
                <UserButton.Link
                 label="My Organizaton"
                labelIcon={<ChartNoAxesGantt size={15}/>}
                href='/onboarding'/>
            </UserButton.MenuItems>
        </UserButton>
      
    </div>
  )
}

export default UserMenu
