import React from 'react'
import { portalLogos } from '../assets/assetsOfAllImages';
import { Link } from 'react-router-dom';

function projectCard({
  banner,
  alt,
  title,
  description,
  techStackList,
  sourceCode,
  liveLink
}){
  return (
    <div className='flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition bg-[#1e293b]'>
       {
        banner && <img src={banner} alt={alt} className='w-full h-60 cursor-pointer p-2' />
       } 
      <div className='flex flex-col p-4'>
        <h2 className='font-semibold text-2xl my-2'>{title}</h2>
        <ul className='flex flex-wrap gap-y-1.5'>
        { 
          techStackList?.map((language,index)=>{
           return <li key={index} className='border group inline-block h-[37.6px]  mr-[5px]  rounded-full overflow-hidden '>
                      <span className='flex h-full justify-center items-center px-2  transform group-hover:-translate-y-full group-active:-translate-y-full transition-all duration-300 group-hover:bg-white group-active:bg-white group-hover:text-white group-active:text-white'>{language}</span>
                      <span className='flex h-full justify-center items-center px-2 transform group-hover:-translate-y-full group-active:-translate-y-full transition-all duration-300 group-hover:bg-white group-active:bg-white group-hover:text-black group-active:text-black'>{language}</span>
                  </li>
          })
        }
        </ul>
        <p className='my-1.5'>{description.split(" ").slice(0,40).join(" ") + "..."}</p>
        <div className='flex gap-3'>
          <Link to={sourceCode} target='_blank' className='cursor-pointer flex items-center'>
            <span className='text-indigo-500'>source code</span>
            <img src={portalLogos.Source} alt={`github link for ${title}`} className='h-6 w-6 inline-block' />
          </Link>
          <Link to={liveLink} target='_blank' className='cursor-pointer flex items-center'>
            <span className='text-green-500'>live website</span>
            <img src={portalLogos.Live} alt={`live website link for ${title}`} className='h-6 w-6 inline-block' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default projectCard;