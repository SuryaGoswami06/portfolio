import React, { useEffect,useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from 'react-router-dom';

function Project(){
    const [mainProject,setMainProject]=useState('');
    const [error,setError]=useState('');

    useEffect(()=>{
        fetch('/content/project/project.json')
        .then(res=>res.json())
        .then(data=>setMainProject(data))
        .catch(err=>setError(err))
    },[])

    return(
    <div className='max-w-[1024px] mx-auto'>
      <Tabs defaultValue="main-project">
        <TabsList>
            <TabsTrigger value="main-project">main project</TabsTrigger>
            <TabsTrigger value="practice-project">practice project</TabsTrigger>
        </TabsList>
        <TabsContent value="main-project">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-3'>
            {
              mainProject!==''?mainProject.map((data)=>{
                    return (
                        <div className='flex flex-col shadow-lg p-4 rounded-lg'>
                             <div >
                                <img className='w-full h-full object-cover' src={data.bannerImage} alt={data.bannerImageDescription} />
                             </div>
                             <h3 className='font-bold text-lg capitalize pt-1'>{data.title}</h3>
                             <div className='flex flex-row uppercase'>
                                <Link to={data.liveLink} className='mr-2 pr-2 border-r-2'>live</Link>
                                <Link to={data.githubLink}>code</Link>
                             </div>
                             <p>
                                {
                                    data.description
                                }
                             </p>
                        </div>
                    )
                }):'something went wrong!!!'
            }
        </div>
        </TabsContent>
        <TabsContent value="practice-project">Change your password here.</TabsContent>
      </Tabs>
    </div>
    )
}

export default Project;