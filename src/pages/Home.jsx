import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skils from '../components/skils/Skils'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
import SocialMedia from '../components/socialMedia/SocialMedia'
import ScrollTop from '../components/scrollTop/ScrollTop'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  const [theme , setTheme ] = useState(
    document.documentElement.getAttribute("data-theme") || 'dark'
  )
  return (
    <div>
      <ToastContainer 
    position='top-center'
    autoClose={3000}
    theme={theme}
    />
        <Navbar />
        <Hero />
        <About />
        <Skils />
        <Projects />
        <Contact />
        <SocialMedia />
        <ScrollTop />
    </div>
  )
}

export default React.memo(Home)