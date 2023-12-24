import React from 'react'
import Footer from '../Components/Footer'
import HeroImage from '../Components/HeroImage'
import AboutContent from "../Components/AboutContent"

const About = () => {
  return (
    <>
      <HeroImage heading="ABOUT." text="I'm a Friendly Front-End Developer."/>
      <AboutContent/>
      <Footer />
    </>

  )
}

export default About