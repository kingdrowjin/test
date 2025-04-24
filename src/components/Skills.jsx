import React from 'react'

const Skills = ({data}) => {
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold mb-2' >Skills</h2>
      <ul className='list-disc list-inside' >
        {data.map((skill, index) => (
          <li key={index} >{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
