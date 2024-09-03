import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({bannerImage,bannerImageDescription,title,liveLink,githubLink,description}) {
  return (
    <div className='flex flex-col shadow-lg p-4 rounded-lg'>
        <div >
          <img className='w-full h-full object-cover' src={bannerImage} alt={bannerImageDescription} />
        </div>
        <h3 className='font-bold text-lg capitalize pt-1'>{title}</h3>
        <div className='flex flex-row uppercase'>
          <Link to={liveLink} className='mr-2 pr-2 border-r-2 text-[#de1a24] text-semibold'>live</Link>
          <Link to={githubLink} className='text-[#056517] text-semibold'>code</Link>
        </div>
        <p>{description}</p>
   </div>
  )
}

export default ProjectCard