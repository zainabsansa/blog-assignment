import React from 'react'
import '../About/about.css'
import Nav from '../Home/Nav'
import Hero from './Hero'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
      <Nav/>
      <Hero heading='About Starter'/>
      <Footer/>
    </div>
  )
}

export default About