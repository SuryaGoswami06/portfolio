import React, { useEffect,useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from 'react-router-dom';
import BreadCrumb from '@/components/BreadCrumb';
import ProjectCard from '@/components/ProjectCard';

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
    <div className='max-w-[1024px] mx-auto flex flex-col'>
      <BreadCrumb currentRoot='project' />
      <Tabs defaultValue="main-project" className='mt-3'>
        <TabsList>
            <TabsTrigger value="main-project">main project</TabsTrigger>
            <TabsTrigger value="practice-project">practice project</TabsTrigger>
        </TabsList>
        <TabsContent value="main-project">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-3'>
            {
              mainProject!==''?mainProject.map((data)=>{
                    return (
                         <ProjectCard 
                            bannerImage={data.bannerImage} 
                            bannerImageDescription={data.bannerImageDescription}
                            title={data.title}
                            liveLink={data.liveLink}
                            githubLink={data.githubLink}
                            description={data.description}
                         />
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