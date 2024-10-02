import BreadCrumb from '@/components/BreadCrumb'
import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const allBlogs = [
    {
      id:1,
      slug:"how-to-make-sudoku-solver",
      title:"how to made sudoku solver using js",
      description:"Learn how to create a powerful Sudoku solver using Python and backtracking algorithms. This comprehensive tutorial walks you through the coding process step-by-step, helping you understand the logic behind solving Sudoku puzzles efficiently. Perfect for beginners and experienced programmers alike!"
    }
  ]
  return (
    <div className='flex flex-col max-w-[1024px] mx-auto'>
         <BreadCrumb currentRoot="blog" />
         <div className='flex justify-between my-7 text-3xl font-fontHeader italic'>
              <h1>writing</h1>
         </div>
         <div className='flex flex-col gap-5'>
           {
            allBlogs?.map((item)=>(
              <Link to={`/blog/${item.slug}`} className='group' key={item.id}>
              <div className='flex justify-between my-1 font-fontHeader text-xl decoration-3 group-hover:underline group-hover:decoration-dotted'>
                  <h2 className='font-semibold capitalize '>{item.title}</h2>
                  <span className='italic'>read post &rarr;</span>
              </div>
              <p>{item.description}</p>
              </Link>
            ))
           }
         </div>
    </div>
  )
}

export default Blog