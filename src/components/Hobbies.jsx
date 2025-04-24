import React from 'react'

const Hobbies = ({data}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Hobbies & Interests</h2>
      <div className="flex flex-wrap gap-4">
        {data.map((hobby, index) => (
          <div 
            key={index}
            className="flex items-center bg-gradient-to-br from-indigo-100 to-purple-100 px-5 py-3 rounded-full"
          >
            <span className="text-indigo-700 font-medium hover:text-indigo-800 transition-colors duration-300">
              {hobby}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies