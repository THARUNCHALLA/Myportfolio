import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContent.css"

const AboutContent = () => {
  return (
    <div className='TotalContainer'>
        <div className='left'>
            <h1 className='who'>Who Am I?</h1>
            <p className='ParaGraph'>Im a React Front-End Developer. I Create Responsive Websites.</p>
            <div className='contactButton'>
            <Link to="/Contact">
            <button className='button2'>CONTACT</button>
            </Link>
            </div>
        </div>
        <div className='right'>
            <div className='img-container'>
            <div className='image-stack top'>
                <img src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/suggestions.png" alt="Top" className='img'/>
                </div>
                <div className='image-stack bottom'>
                    <img src="https://tas.co.in/wp-content/uploads/2020/05/Screenshot-28.png" alt="Bottom" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent