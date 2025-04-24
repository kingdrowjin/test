import React from 'react'

const Certifications = ({data}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((cert, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{cert}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
