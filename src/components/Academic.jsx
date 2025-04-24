import React from 'react'

const Academic = ({data}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Academic Background</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-indigo-600 font-semibold">Degree:</span>
          <span className="text-gray-700">{data.degree}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-indigo-600 font-semibold">University:</span>
          <span className="text-gray-700">{data.University}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-indigo-600 font-semibold">Year:</span>
          <span className="text-gray-700">{data.year}</span>
        </div>
      </div>
    </section>
  )
}

export default Academic
