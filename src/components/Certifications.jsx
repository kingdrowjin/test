import React from 'react'

const Certifications = ({data}) => {
  console.log(data.map(info => info),'jin');
  
  return (
    <section className='p-4'>
      <h2 className='text-2xl font-bold mb-2' >Certifications</h2>
      {
        data.length == 0 ? <p>No experience available.</p> :     
            <ul className='list-disc list-inside' >
              {data.map((cert, index) => (
                <li key={index} >{cert}</li>
              ))}
            </ul>
      }
    </section>
  )
}

export default Certifications
