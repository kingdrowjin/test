import React from 'react'

const Academic = ({data}) => {
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold mb-2' >Academic Background</h2>
      <p><strong>Degree:</strong> {data.degree}</p>
      <p><strong>University:</strong> {data.University}</p>
      <p><strong>Year:</strong> {data.year}</p>
    </section>
  )
}

export default Academic
