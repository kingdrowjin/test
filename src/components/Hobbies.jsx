import React from 'react'

const Hobbies = ({data}) => {
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold mb-2' >Hobbies & Interests</h2>
      <ul className='list-disc list-inside' >
        {data.map((hobby, index) => (
          <li key={index} >{hobby}</li>
        ))}
      </ul>
    </section>
  )
}

export default Hobbies
