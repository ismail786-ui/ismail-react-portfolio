import React from 'react'

export default function Contact() {
  const config = {
    email:'mohamedismail6362@gmail.com',
    phone:'+91 1234567890'
  }
  return (
    <section className='flex flex-col px-5 py-32 bg-primary text-white' id='contact'>
        <div className='flex flex-col items-center '>
            <h1 className='text-3xl border-b-4 border-[#ef03ef] mb-5 w-[120px] font-bold'>Contact</h1>
            <p className='pb-5' >Touch with me</p>
            <p className='py-2'><span  className='font-bold'>Email : </span>{config.email}</p>
            <p className='py-2'><span  className='font-bold'>Phone : </span>{config.phone}</p>

            </div>
        </section>
  )
}

