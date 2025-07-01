import React from 'react'
import { socialIcons } from '../assets/assetsOfAllImages'
import {Link} from 'react-router-dom'

function footer() {
  return (
    <footer className='mt-10'>
        <h2 className='text-xl uppercase mb-4'>let's talk</h2>
        <ul>
            <li className='my-1'>
                <a href='https://www.linkedin.com/in/suryagoswami06' target='_blank' rel='noreferrer'>
                    <img src={socialIcons.Linkedin} alt="linkedin" className='h-7 w-7 object-cover inline-block mr-2' />
                     <span>LinkedIn</span>
                </a>
            </li>
            <li className='my-1'>
                <Link to='tel:+917024485544'>
                    <img src={socialIcons.Call} alt="phone-number" className='h-7 w-7 object-cover inline-block mr-2' />
                     <span>7024485544</span>
                </Link>
            </li>
            <li className='my-1'>
                <Link to='mailto:suryakantgoswami063@gmail.com'>
                    <img src={socialIcons.Mail} alt="mail-id" className='h-7 w-7 object-cover inline-block mr-2' />
                     <span>suryakantgoswami063@gmail.com</span>
                </Link>
            </li>
        </ul>
        <div className='flex justify-center items-end h-20'>
            <span className='pb-1'>&#169;2025 surya goswami</span>
        </div>
    </footer>
  )
}

export default footer