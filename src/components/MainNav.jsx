import React from 'react'
import { Button } from "@/components/ui/button"
import MenuItem from './MenuItem'

function MainNav() {
  return (
    <div className='flex items-center'>
      <Button variant='ghost'>GitHub</Button>
      <MenuItem w='w-[100%]'/>
    </div>
  )
}

export default MainNav