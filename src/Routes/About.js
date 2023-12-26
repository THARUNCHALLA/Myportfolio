import React from 'react'
import Footer from '../Components/Footer'
import HeroImage from '../Components/HeroImage'
import AboutContent from "../Components/AboutContent"
import Education from "../Components/Education"

const About = () => {
  return (
    <>
      <HeroImage heading="ABOUT." text="I'm a Friendly Front-End Developer."/>
      <AboutContent/>
      <Education/>
      <Footer />
    </>

  )
}

export default About