import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({currentRoot}){
 return(
    <div className='flex items-center'>
            <Link to='/' className='capitalize pr-2 opacity-90 justify-center'>
              <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=12229&format=png&color=000000" alt="home-icon" />
            </Link>
            <img className='w-5 h-5' src="https://img.icons8.com/fluency/48/arrow.png" alt="arrow"/>
            <span className='capitalize pl-2 text-semibold'>{currentRoot}</span>
     </div>
 )
}
export default BreadCrumb;