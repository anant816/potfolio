import { useState } from 'react'
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
function App(){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Contacts/>
    </div>
  )
}
export default App
