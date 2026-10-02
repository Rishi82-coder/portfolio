import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}

export default Home