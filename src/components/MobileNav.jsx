import React from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Hamburger from '../assets/hamburger.png'
import { Link } from "react-router-dom";
import MenuItem from './MenuItem'

function MobileNav(){
    return(
    <Sheet>
        <SheetTrigger>
            <img src={Hamburger} alt="hamburger-icon" className="h-6" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center mt-12">
            <Link to='/project' className="py-3 capitalize">projects</Link>
            <Link to='/blog'  className="pt-3 pb-6 capitalize">blog</Link>
            <MenuItem w='w-[100%]' />
          </div>
        </SheetContent>
    </Sheet>
      
    )
}

export default MobileNav;