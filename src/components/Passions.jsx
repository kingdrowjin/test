import React from 'react'

const Passions = ({data}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Passions</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((passion, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-indigo-100 rounded-xl p-4 hover:border-indigo-300 hover:transform hover:scale-105 transition-all duration-300"
          >
            <p className="text-lg text-indigo-600 font-medium text-center">{passion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Passions