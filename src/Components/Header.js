import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";

import "./Header.css"

const Header = () => {
    const [value,setvalue]=useState(false)
    const clickHumberg=()=>setvalue(!value)
    const [color,setColor]=useState(false)
    const changeEvent=()=>{
        if(window.scrollY>100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeEvent)
  return (
        <div className={color?'MainContainer MainContainer-bg':"MainContainer"}>
        <NavLink to="/"><h1 className='hj'>Portfolio</h1></NavLink>
        <ul className={value?"navmenu active":"navmenu"}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Project">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
            <li style={{marginRight:"110px"}}>
                <NavLink to="/Contact">Contact</NavLink>
            </li>
        </ul>
        <div className='Hamburger'>
        {value? <RxCross2 onClick={clickHumberg} style={{color:"white"}} className='First'/>:<RxHamburgerMenu size={20} onClick={clickHumberg} style={{color:"white"}} className='First'/>}
        </div>
    </div>
  
  )
}

export default Header