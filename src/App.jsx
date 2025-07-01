import { techStack } from './data/techStack'
import { socialIcons } from './assets/assetsOfAllImages'
import {educationList} from './data/educationList'
import SkillCard from './components/skillCard'
import EducationCard from './components/educationCard'
import ProjectCard from './components/ProjectCard'
import { projectDetails } from './data/projectDetails'
import { Link } from 'react-router-dom'

function App() {
  
  return (
  <div>

    <section className='flex flex-col justify-center items-center h-screen text-lg text-center'>
      <h2>&#128075; hii, my name is</h2>
      <h1 className='text-4xl my-8'>suryakant goswami</h1>
      <p>I am a full stack developer From bilaspur </p>
      <p>I Love to Create Simple Yet Beautiful Website with Great User Experience</p>
      <a href="/suryaResume.pdf" download="resume" className='my-8'>
        <button type="button" className='border cursor-pointer py-2 px-4 animate-bounce'>Read CV!</button>
      </a>
      <ul className='flex flex-row'>
        <li>
          <Link to="https://github.com/SuryaGoswami06" target='_blank' className='h-11 w-11 block transform duration-300 hover:-translate-y-1 transition-all'>
            <img src={socialIcons.Github} alt="github-link" className='w-full h-full object-contain' />
          </Link>
        </li>
        <li className='mx-2'>
          <Link to="https://www.linkedin.com/in/suryagoswami06" target='_blank' className='h-10 w-10 block transform duration-300 hover:-translate-y-1 transition-all'>
            <img src={socialIcons.Linkedin} alt="linkedin-link" className='w-full h-full object-contain' />
          </Link>
        </li>
        <li>
          <Link to="https://cdn.appuals.com/wp-content/uploads/2023/06/image-3-1024x576.png.webp" target='_blank' className='h-10 w-10 block transform duration-300 hover:-translate-y-1 transition-all'>
            <img src={socialIcons.Instagram} alt="instagram-link" className='w-full h-full object-contain' />
          </Link>
        </li>
      </ul>
    </section>

        {/* SKILLS SET SECTION */}
    <section>
      <h3 className="text-2xl capitalize mb-4 font-bold">technologies and tools</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {
          techStack.map((tech,index)=>{
            return <SkillCard name={tech.name} icon={tech.icon} key={index} />
          })
        }
      </div>
    </section>

        {/* EDUCATION SECTION */}
    <section className="capitalize">
      <h3 className="text-2xl font-bold mt-8 mb-4 ">education</h3>
      <div className="grid grid-cols-1 gap-2">
       {
        educationList.map((education,index)=>{
          return <EducationCard key={index} logo={education.logo} university={education.university} degree={education.degree} location={education.location} />
        })
       }
      </div>
    </section>

       {/* PROJECTS SECTION */}
    <section>
     <h3 className="text-2xl mt-8 font-bold capitalize">projects</h3>
     <p>A curated selection of my web projects.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
      {
        projectDetails.slice(0,4).map((project,index)=>{
          return <ProjectCard key={index} banner={project.banner} alt={project.alt} title={project.title} description={project.description} techStackList={project.techStackList} sourceCode={project.sourceCode} liveLink={project.liveLink} />
        })
      }
     </div>
     {/* <div className='flex justify-center items-center w-full h-24'>
        <Link to='projects' className='flex border h-fit border-black py-1.5 items-center px-6 cursor-pointer relative group hover:text-white active:text-white'>
          <span className='absolute z-0 top-1/2 left-0 w-full h-0 block group-hover:h-full group-active:h-full group-hover:top-0 group-active:top-0 group-hover:bg-black group-active:bg-black transition-all duration-300'></span>
          <span className='relative z-10 mr-1.5 uppercase'>see more!</span>
          <svg fill="currentColor" className='relative z-10 group-hover:text-white group-active:text-white text-black transform group-hover:translate-x-2 group-active:translate-x-2 duration-300 transition-all' height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg>
        </Link>
     </div> */}
    </section>
  </div>
  )
}

export default App
