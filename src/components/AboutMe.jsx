import React from 'react'

const AboutMe = ({data, image}) => {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center space-y-6">
        <img 
          src={image} 
          alt="profile" 
          className="w-48 h-48 rounded-full border-4 border-indigo-500 shadow-lg hover:border-indigo-600 transition-colors duration-300" 
        />
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{data}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
