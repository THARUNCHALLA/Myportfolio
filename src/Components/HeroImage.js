import React from 'react'
import "./HeroImage.css"


const HeroImage = (props) => {
    const {text,heading}=props
  return (
        <div className='HeroContainer'>
            <div className='HeroInsideContainer'>
                <h1 className='HEAD'>{heading}</h1>
                <p className='p1'>{text}</p>
            </div>
        </div>
  )
}

export default HeroImage