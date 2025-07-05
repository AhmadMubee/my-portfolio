import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'


function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App