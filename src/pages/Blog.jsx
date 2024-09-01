import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const allBlogs = [
    {
      id:1,
      slug:"how-to-make-sudoku-solver",
      title:"how to made sudoku solver using js",
      description:"Learn how to create a powerful Sudoku solver using Python and backtracking algorithms. This comprehensive tutorial walks you through the coding process step-by-step, helping you understand the logic behind solving Sudoku puzzles efficiently. Perfect for beginners and experienced programmers alike!"
    },
    {
      id:2,
      slug:"how-to-create-snake-game",
      title:"Create a Classic Snake Game in Python: A Fun and Easy Tutorial for Beginners",
      description:"Discover how to build the classic Snake game using Python and Pygame. Follow our easy-to-understand guide to learn game development basics, from setting up the environment to coding the snake's movement and growing mechanics. Ideal for those new to programming and game design!"
    }
  ]
  return (
    <div className='flex flex-col max-w-[1024px] mx-auto'>
         <div>
            <Link to='/' className='capitalize pr-2 opacity-70'>home</Link>
            <span>&gt;</span>
            <span className='capitalize pl-2'>blog</span>
         </div>
         <div className='flex justify-between my-7 text-3xl font-fontHeader italic'>
              <h1>writing</h1>
         </div>
         <div className='flex flex-col gap-5'>
           {
            allBlogs.map((item)=>(
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