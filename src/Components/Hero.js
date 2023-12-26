import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import "./Hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='Banner'>
        <div className='box1'>
            <img src="https://media.istockphoto.com/id/1832875737/photo/digital-data-and-technology-ai-big-data-technology-scientist-computing-analyzing-and.jpg?s=2048x2048&w=is&k=20&c=tc7g112TKA9qO7Jn-pkRamumNM5V_v_K5cD3Mt2T9-g=" alt="Tharun" className='Image'/>
        </div>
        <div className='banner-text'>
            <p className='p'>I'm Tharun Challa</p>
            <h1 className='h1'>Front-End Developer</h1>
            <div className='social'>
            <a href="https://www.linkedin.com/in/tharun-challa-a59739248/" target='_blank' rel="noreferrer"><FaLinkedin size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                            <a href='https://www.facebook.com/stories/113635216498345/UzpfSVNDOjExMDg5Mjg0MDAzMDQ4MTM=/?bucket_count=9&source=story_tray' target='_blank' rel="noreferrer"><FaFacebook size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                  <a href='https://www.instagram.com/?hl=en' target='_blank' rel="noreferrer"><FaInstagram size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                            <a href='https://github.com/' target='_blank' rel="noreferrer"><FaGithub size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                        </div>
            <div className='ButtonContainer'>
                <Link to="/Project"><button className='button1'>Project</button></Link>
                <Link to="/Contact"><button className='button2'>Contact</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero