import React from "react";

function SkillCard({
    name,
    icon,
}){
    return (
        
    <div  className=' p-2 shadow-lg bg-[#1e293b] flex justify-between items-center transition-all duration-300 hover:translate-x-1 active:translate-x-1 hover:-translate-y-1 active:-translate-y-1 hover:shadow-[4px_4px_#fff] active:shadow-[4px_4px_#fff]'>
      <p>{name}</p>
      <img src={icon} alt={name} className="h-8 w-8" />
    </div>
        
    )
}

export default SkillCard;