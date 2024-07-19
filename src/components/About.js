import React from 'react'
import Abtimg from '../assets/Aboutimg.jpg'

export default function About() {
  const config = {
         line1:'Hi, My name is J Mohamed Ismail. I am a Web Developer Certified',
         line2:'I am Proficient in skills like Html,Css,Js,React.JS,Bootstrap,Php,Sql.',
}
  return (
    <section className='flex flex-col px-5 md:flex-row bg-secondary' id='about'>
        <div className='py-10 pl-5 md:w-1/4'>
            <img src={Abtimg}/>
        </div >
        <div className='md:w-1/3 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-3xl border-b-4 border-[#ef03ef] ml-5 mb-5 w-[150px] font-bold'>About Me</h1>
            <p className='pb-5 pl-5' >{config.line1}</p>
            <p className='pb-5 pl-5'>{config.line2}</p>
            

            </div>
            </div> 
        </section>
  )
}

