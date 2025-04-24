import './App.css'
import data from './data.json'
import AboutMe from './components/AboutMe'
import Academic from './components/Academic'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Hobbies from './components/Hobbies'
import Passions from './components/Passions'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        <AboutMe data={data.aboutMe} image={data.img} />
        <Academic data={data.academic} />
        <Certifications data={data.certifications} />
        <Experience data={data.experience} />
        <Hobbies data={data.hobbies} />
        <Passions data={data.passions} />
        <Skills data={data.skills} />
      </div>
    </div>
  )
}

export default App
