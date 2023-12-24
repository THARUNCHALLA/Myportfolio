import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='Banner'>
        <div className='box1'>
            <img src="https://www.wallcavityclaims.co.uk/wp-content/uploads/2014/10/miscellaneous-book-book-home-blur-bokeh-background-wallpaper-widescreen-full-screen-widescreen-hd-wallpapers-background-wallpaper.jpg" alt="Tharun" className='Image'/>
        </div>
        <div className='banner-text'>
            <p className='p'>Hi,This Is Tharun Challa</p>
            <h1 className='h1'>React Developer</h1>
            <div className='ButtonContainer'>
                <Link to="/Project"><button className='button1'>Project</button></Link>
                <Link to="/Contact"><button className='button2'>Contact</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero