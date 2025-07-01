import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/footer'

function layout() {
  return (
    <div className='mx-4 md:w-[86%] lg:w-[80%] md:mx-auto'>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default layout