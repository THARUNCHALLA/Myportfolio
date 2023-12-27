import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
const sendEmail=()=> {
        window.location.href = 'mailto:challatharun31@gmail.com';
    }
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='right'>
                    <h1 className='about'>Personal Information</h1>
                <a href="https://maps.app.goo.gl/T733zpaP1p7cbaBt5" target="_blank" rel="noreferrer">
                        <div className='location'><FaHome size={22} style={{ color: "white" }} />
                            <div className='containerforlocation'>
                                <p className="Village">2-181 palukurivaripalem</p>
                                <p className="Village">Andhra Pradesh.</p>
                            </div>
                        </div>          
                    </a>
                        <a href="https://wa.me/919100807049" target="_blank" rel="noreferrer">
                        <div className='location'>
                            <FaPhone size={22} style={{ color: "white" }} className='FAPHONE' />
                            <div className='containerforlocation'>
                                <p className="Village">Call Me</p>
                            </div>
                            </div>
                        </a>
                        <div className='location'>
                            <FaMailBulk size={22} style={{ color: "white" }} onClick={sendEmail}/>
                            <div className='containerforlocation'>
                                <p className="Village">challatharun31@gmail.com</p>
                            </div>
                            </div>
                </div>
                <div className='right'>
                    <div>
                        <h1 className='about'>About</h1>
                        <p className='Village'>I'm Tharun Challa, a passionate frontend developer with a keen eye for crafting immersive and user-centric digital experiences. I specialize in translating creative designs into seamless, interactive, and responsive web applications..</p>
                        <div className='social'>
                            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FaFacebook size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                            <a href="https://www.linkedin.com/in/tharun-challa-a59739248/" target='_blank' rel="noreferrer"><FaLinkedin size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                            <a href='https://www.instagram.com/?hl=en' target='_blank' rel="noreferrer"><FaInstagram size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                            <a href='https://github.com/' target='_blank' rel="noreferrer"><FaGithub size={22} style={{ color: "white", marginRight: "1rem" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer