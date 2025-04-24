import React from 'react'

const AboutMe = ({data, image}) => {
  return (
    <section className=' text-center flex justify-center items-center flex-col'>
        <img src={image} alt="profile" className='w-40 h-40 rounded-full border-4 border-white shadow-md' />
        <div>
            <h2 className='text-2xl font-bold mb-2' >About Me</h2>
            <p>{data}</p>
        </div>
    </section>
  )
}

export default AboutMe
