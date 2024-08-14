import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import cv from '../assets/cv.png'
import squareArrow from '../assets/square-arrow.png'
import { Button } from '@/components/ui/button'


function Hero() {
  const [myImage,setMyImage] = useState('')

  useEffect(()=>{
    fetch('https://api.github.com/users/SuryaGoswami06')
    .then(res=>res.json())
    .then((data)=>{
      setMyImage(data.avatar_url)
    })
  },[])
  return (
    <>
      <div className='max-w-[1024px] mx-auto grid md:grid-cols-3 md:grid-rows-7 lg:grid-cols-4 lg:grid-rows-5 w-full gap-3 font-fontPara'>
        {/* basic intro */}
        <div className='md:col-span-3 md:row-span-2 lg:col-span-3 p-6 lg:row-span-2 flex shadow-lg rounded-lg border'>
           <div className='flex flex-col w-full'>
               <h4 className='opacity-60 text-lg'>welcome</h4>
               <p className='py-2'>hi,i'm suryakant goswami,a full stack developer with a passion for turning
                ideas into interactive and visually engaging web experiences.i specialize in the mern
                stack and have a deep love for javascript,which drives my creativity in building both the 
                front and back ends in applications.i'm always exploring new technologies and refining
                my skills to create efficient and user friendly solutions.
               </p>
               <div className='flex gap-1.5'>
                   <Link className='bg-btnBgColor hover:bg-btnBgHoverColor rounded-lg p-2'>
                     <img src={github} alt="github" className='h-6 w-6' />
                   </Link>
                   <Link className='bg-btnBgColor hover:bg-btnBgHoverColor rounded-lg p-2'>
                     <img src={linkedin} alt="linkedin" className='h-6 w-6' />
                   </Link>
                   <Link className='bg-btnBgColor hover:bg-btnBgHoverColor rounded-lg p-2'>
                     <img src={gmail} alt="gmail" className='h-6 w-6' />
                   </Link>
               </div>
           </div>
           <div className='p-3 sm:block hidden'>
               <img src={myImage} alt="my image"  className='rounded-lg'/>
           </div>
        </div>

        {/* skills */}
        <div className='md:col-span-1 md:row-span-3 lg:row-span-3 lg:col-span-1 shadow-lg p-6 break-words rounded-lg border'>
           <h2 className='opacity-60 text-lg'>skills</h2>
            <h3 className='font-bold pt-2'>programming language</h3>
            <ul className='list-disc pl-4'>
              <li>c</li>
              <li>c++</li>
              <li>javascript</li>
            </ul>
            <h3 className='font-bold pt-2'>web development</h3>
            <ul className='list-disc pl-4 '>
              <li>html ,css</li>
              <li>MERN stack (mongoDB,Express,React,Node)</li>
              <li>RESTful APIs</li>
              <li>Responsive Web Design</li>
              <li>auth0,stripe,axios</li>
              <li>tailwind css,shadcn</li>
            </ul>
            <h3 className='font-bold pt-2'>version control & tools</h3>
            <ul className='list-disc pl-4'>
              <li>git & github</li>
              <li>vs code</li>
            </ul>
             <h3 className='font-bold pt-2'>soft skills</h3>
            <ul className='list-disc pl-4'>
              <li>teamwork</li>
              <li>problem solving</li>
            </ul>
        </div>

        {/* education */}
        <div className='md:col-span-1 md:row-span-2 lg:row-span-2 lg:col-span-1 shadow-lg p-6 rounded-lg border'>
          <h2 className='font-bold text-lg capitalize'>education</h2>
            <div className='flex flex-col my-4'>
              <div className='flex justify-between items-center font-semibold'>
                <span>MCA</span>
                <span>2021-23</span>
              </div>
              <div>
                <span>cgpa-7</span>
              </div>
              <div>
                 <address>kalinga university raipur chhattisgarh</address>
              </div>
            </div>
            <div className='flex flex-col my-4'>
              <div className='flex justify-between items-center font-semibold'>
                <span>BCA</span>
                <span>2018-21</span>
              </div>
              <div>
                <span>percentage-66</span>
              </div>
              <div>
                <address>cmd bilaspur chhattisgarh</address>
              </div>
            </div>
        </div>

        {/* resume */}
        <div className='shadow-lg md:row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1 rounded-lg p-6 border'>
         <h2 className='font-bold uppercase text-lg'>cv</h2>
          <p className='text-sm mt-1'>download my resume by clicking on the button below</p>
          <Button variant='ghost' className='bg-btnBgColor text-white hover:bg-btnBgHoverColor hover:text-white my-3 w-full'>
            <span>download resume <img src={cv} alt="cv-icon" className='inline' /></span>
          </Button>
        </div>

        {/* projects */}
        <div className='flex justify-between md:col-span-1 md:row-span-1 lg:row-span-1 lg:col-span-1 p-6 shadow-lg rounded-lg border'>
          <h2 className='font-bold text-lg'>projects</h2>
          <div>
            <Link to='project'>
               <img src={squareArrow} className='h-5 w-5' alt="navigate to project section" />
            </Link>
          </div>
        </div>

        {/* current time */}
        <div className='md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1 shadow-lg p-6 rounded-lg border'>
          <h2 className='font-bold text-lg'>time zone</h2>
          <div>
          </div>
        </div>

        {/* social media links */}
        <div className='md:row-span-3 md:col-span-1 lg:row-span-2 lg:col-span-1 shadow-lg rounded-lg border p-6'>
            <h2 className='font-bold text-lg'>let's start working together!</h2>
            <div className='mt-2'>
              <h3 className='opacity-70'>contact details</h3>
              <address className='text-xs'>
                 suryakantgoswami063@gmail.com
                 bengaluru,karnataka
              </address>
            </div>
            <div className='mt-2'>
              <h3 className='opacity-70'>socials</h3>
              <ul className='list-none flex flex-col gap-1 text-sm'>
                <li>
                  <Link className='decoration-dotted underline underline-offset-2'>linkedIn</Link>
                </li>
                <li>
                  <Link className='underline underline-offset-2 decoration-dotted'>github</Link>
                </li>
                <li>
                  <Link className='underline underline-offset-2 decoration-dotted'>instagram</Link>
                </li>
              </ul>
            </div>
            <div className='mt-2 text-xs'>
              <p>Thank you for reaching out! Whether you have a question, a suggestion, or just want to share your thoughts, I’m all ears.</p>
            </div>
        </div>

        {/* current scenario */}
        <div className='md:row-span-2 md:col-span-1 lg:row-span-1 lg:col-span-1 shadow-lg rounded-lg border p-6'>
          <div className='flex justify-between items-center'>
              <h2 className='font-bold text-lg'>now</h2>
              <span className='relative h-3 w-3'>
                <span className='absolute bg-green-400 rounded-full h-full w-full animate-ping'></span>
                <span className='bg-green-500 absolute h-full w-full rounded-full'></span>
              </span>
            </div>
           <span className='opacity-60'>whats that ?</span>
           <p className='text-sm'>currently preparing for interview</p>
        </div>

        {/* quotes */}
        <div className='row-span-1 col-span-1 shadow-lg rounded-lg border p-6'>
             <div className='border-l-2 pl-2 text-sm'>
                  <q>Any fool can write code that a computer can understand. 
                    Good programmers write code that humans can understand.
                  </q>
             </div>
             <address>― Martin Fowler</address>
        </div>

        {/* blog */}
        <div className='row-span-1 col-span-1 shadow-lg rounded-lg border p-6 flex justify-between'>
          <h2 className='font-bold text-lg'>blogs</h2>
          <div>
            <Link to='blog'>
               <img src={squareArrow} className='h-5 w-5' alt="navigate to project section" />
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero