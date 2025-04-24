import React from 'react'

const Academic = ({data}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Academic Background</h2>
      <div className="space-y-6">
        {data.map((academic, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100 hover:transform hover:scale-102 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-indigo-600 font-semibold">University:</span>
                <span className="text-gray-700">{academic.degree}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-indigo-600 font-semibold">Degree:</span>
                <span className="text-gray-700">{academic.university}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-indigo-600 font-semibold">Year:</span>
                <span className="text-gray-700">{academic.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Academic