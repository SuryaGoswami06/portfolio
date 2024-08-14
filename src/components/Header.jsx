import React from 'react'
import { Link } from 'react-router-dom' 
import MainNav from './MainNav'
import MobileNav from './MobileNav'

function Header() {
  return (
     <header className='w-full border-b px-3 sticky top-0 dark:text-white dark:bg-[#0C0A09] bg-background/60 backdrop-blur-sm'>
          <div className='max-w-screen-xl m-auto flex justify-between items-center py-4'>
                <Link to='/'>
                    <h3>surya</h3>
                </Link>
                <div className='hidden md:block'>
                    <MainNav />
                </div>
                <div className='md:hidden'>
                     <MobileNav />
                </div>
          </div>
     </header>
  )
}

export default Header