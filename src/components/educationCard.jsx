import React from 'react'

function educationCard({
    logo,
    university,
    degree,
    location
}) {
  return (
    <div className="rounded-2xl shadow-lg hover:shadow-2xl bg-[#1e293b] p-4 transition flex">
        <img className="w-20 h-20 mr-4" src={logo} alt={university} />
        <div className="flex flex-col">
            <h4 className="text-xl font-medium">{university}</h4>
            <p>{degree}</p>
            <p className="text-sm">{location}</p>
        </div>
    </div>
  )
}

export default educationCard