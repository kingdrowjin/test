import React from 'react'

const Skills = ({data}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {data.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium hover:bg-indigo-200 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
