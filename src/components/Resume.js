import React from 'react'
import Resumeimg from '../assets/resume.webp'
import res from '../assets/resu.jpg'

export default function Resume() {
  const config = {
    link:res
  }
  return (
    <section className='flex flex-col px-5 md:flex-row bg-secondary' id='resume'>
        <div className='py-10 pl-5 md:w-1/4 flex justify-center md:justify-end'>
            <img src={Resumeimg} className='w-[350px]'/>
        </div >
        <div className='md:w-1/3 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-3xl border-b-4 border-[#ef03ef] mb-5 w-[120px] font-bold'>Resume</h1>
            <p className='pb-5' >You can view my resume <a className='btn' target='_blank' href={config.link}> Download</a></p>
            </div>
            </div> 
        </section>
  )
}

