import React from 'react'
import portimg from '../assets/Project port.png'
import Abtimg from '../assets/Aboutimg.jpg'
import audio from '../assets/Audio-Visual.jpg'
import media from '../assets/mediaglitz screenshot.png'



export default function Projects() {
  const config = {
    projects:[
      {
        image:portimg,
        description:'My own portfolio project using react',
        link:''
      },
      // {
      //   image:Abtimg,
      //   description:'simple portfolio website',
      //   link:''
      // },
      {
        image:media,
        description:'Mediaglitz audio & visual Project',
        link:''
      }
    ]
  }
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='projects'>
    <div className='w-full'>
    <div className='flex flex-col px-10 py-5' >
    <h1 className='text-3xl border-b-4 border-[#ef03ef] mb-5 w-[120px] font-bold'>Projects</h1>
    <p className=''>These are some of my best projects.i have built these with Html,Css,Bootstrap,React and php</p>
    </div>
    </div>
    <div className='w-full'>
    <div className='flex flex-col md:flex-row px-10 gap-5' >
      {config.projects.map((project)=>(
        <a href={project.link}>
        <div className='relative'>
        <img src={project.image}  className='h-[200px] w-[450px] '/>
        <div className='project-desc'>
          <p className='text-center px-5 py-5'>{project.description}</p>
          <div className='flex justify-center'>
          <a target='_blank' className='btn' href={project.link}>View Project</a>
          </div>
        </div>
        </div>
        </a>
      ))}
     </div>
    </div>
    </section>
  )
}

