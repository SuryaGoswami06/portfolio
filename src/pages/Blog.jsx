import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className='flex flex-col max-w-[1024px] mx-auto'>
         <div>
            <Link to='/' className='capitalize pr-2 opacity-70'>home</Link>
            <span>&gt;</span>
            <span className='capitalize pl-2'>blog</span>
         </div>
         <div className='flex justify-between mt-3'>
              <h2>writing</h2>
              <div>filter</div>
         </div>
         <div>

         </div>
    </div>
  )
}

export default Blog