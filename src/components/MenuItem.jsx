import { Button } from "@/components/ui/button"
import React, { useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import light from '../assets/light.png'
import dark from '../assets/dark.png'

function MenuItem({w}) {
  
    const [isLightMode,setIsLightMode] = React.useState(true)

    const toggle = (event)=>{
        if(event==='light'){
            setIsLightMode(true)
            document.body.classList.remove('dark')
        }else{
            setIsLightMode(false)
            document.body.classList.add('dark')
        }
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={w}>
            <img src={isLightMode ? light : dark} alt="light-mode" className="h-5 w-5"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={isLightMode}
          onCheckedChange={()=>toggle('light')}
        >
          light 
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={!isLightMode}
          onCheckedChange={()=>toggle('dark')}
        >
          dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuItem