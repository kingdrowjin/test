import React from 'react'

const Passions = ({ data }) => {
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold mb-2' >Passions</h2>
      <ul className='list-disc list-inside' >
        {data.map((passion, index) => (
          <li key={index} >{passion}</li>
        ))}
      </ul>
    </section>
  )
}

export default Passions
