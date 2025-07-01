import React from 'react'
import { projectDetails } from '../data/projectDetails'
import ProjectCard from '../components/ProjectCard'
import Home from '../assets/home.png'
import { Link } from 'react-router-dom'

function projects() {
  return (
    <div>
    <h3 className="text-2xl mt-8 font-semibold capitalize">projects</h3>
     <p>A curated selection of my web projects.</p>
     <div className='flex items-center my-2'>
        <Link to='/'>
            <img src={Home} alt="home icon" className='h-6 w-6' />
        </Link>
        <span className='mx-2'>&gt;</span>
        <span className='text-blue-500'>projects</span>
     </div>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
      {
        projectDetails.map((project,index)=>{
          return <ProjectCard key={index} banner={project.banner} alt={project.alt} title={project.title} description={project.description} techStackList={project.techStackList} />
        })
      }
     </div>
    </div>
  )
}

export default projects