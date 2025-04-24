import React from 'react'

const Experience = ({data}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Work Experience</h2>
      {data.length === 0 ? (
        <p className="text-gray-500 italic">No experience available.</p>
      ) : (
        <div className="grid gap-6">
          {data.map((job, index) => (
            <div key={index} className="bg-indigo-50 rounded-lg p-5 hover:bg-indigo-100 transition-colors duration-300">
              <p className="text-lg font-semibold text-indigo-700 mb-2">{job.role}</p>
              <p className="text-gray-700 mb-1"><span className="font-medium">Company:</span> {job.company}</p>
              <p className="text-gray-600"><span className="font-medium">Duration:</span> {job.duration}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Experience
