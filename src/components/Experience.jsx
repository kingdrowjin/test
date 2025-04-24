import React from 'react'

const Experience = ({data}) => {
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold mb-2' >Work Experience</h2>
      {
        data.length === 0 ? <p>No experience available.</p> :
         data.map((job, index) => (

          <div key={index} className='mb-2'>
           <p><strong>Role:</strong> {job.role}</p>
           <p><strong>Company:</strong> {job.company}</p>
           <p><strong>Duration:</strong> {job.duration}</p>
          </div>
         ))
      }
    </section>
  )
}

export default Experience
