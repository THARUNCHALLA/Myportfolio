import React, { useState } from 'react'
import THARUN12 from "../assets/Tharunchalla.jpg"
import "./Education.css"

const Education = () => {
    const [THARUN, SETTHARUN] = useState(true)
    const [THARUN1, SETTHARUN1] = useState(true)
    const [THARUN2, SETTHARUN2] = useState(true)

    const mouse = () => {
        SETTHARUN(false)
    }

    const MOUSE = () => {
        SETTHARUN(true)
    }
    const mouse1 = () => {
        SETTHARUN1(false)
    }

    const MOUSE1 = () => {
        SETTHARUN1(true)
    }
    const mouse2 = () => {
        SETTHARUN2(false)
    }

    const MOUSE2 = () => {
        SETTHARUN2(true)
    }


    return (
        <div className='edu'>
            <h1 className='EducationPara'>Education</h1>
            <div className='AllImages'>
                <div className='IMAGECONTAINER' onMouseOver={mouse} onMouseOut={MOUSE}>
                    <div className='IMAGE1234'><img src="https://leavestranscript.com/wp-content/uploads/2020/08/Yogi-Vemana-University.jpg" alt="btech" className='btech' /></div>
                    <div className='INSIDEANOTHERCONTAINER'>
                        {THARUN && <button className='tharun1234'>77.8%</button>}
                        {!THARUN && <div className='navmenu1'>
                            <div className='TharunImage'>
                            <img src={THARUN12} alt='tharun'/>
                            </div>
                            <h1 className='Yogi'>Ysr Engineering College Of YVU</h1>
                            <p className='Years'>2019-2023</p>
                            <button>CGPA:7.78 CGPA</button>
                            <h3 className='ECE'>Electronics and communication Engineering</h3>
                            <p className='Kadapa'>Kadapa,AndhraPradesh,India</p>
                        </div>}
                    </div>
                </div>
                <div className='IMAGECONTAINER' onMouseOver={mouse1} onMouseOut={MOUSE1}>
                    <div className='IMAGE1234'><img src="https://lh3.googleusercontent.com/p/AF1QipMWQAgwGwJ-tBOpQ0yHQ5oiS8YYgrks7TCJ18lv=s1280-p-no-v1" alt="btech" className='btech' /></div>
                    <div className='INSIDEANOTHERCONTAINER'>
                        {THARUN1 && <button className='tharun1234'>77.8%</button>}
                        {!THARUN1 && <div className='navmenu1'>
                        <div className='TharunImage'>
                            <img src={THARUN12} alt='tharun'/>
                            </div>
                            <h1 className='Yogi'>Sri Chaitanya JR College</h1>
                            <p className='Years'>2019-2023</p>
                            <button> CGPA :10 CGPA</button>
                            <h3 className='ECE'>Intermediate, MPC</h3>
                            <p className='Kadapa'>Nellore,AndhraPradesh,India</p>
                        </div>}
                    </div>
                </div>
                <div className='IMAGECONTAINER' onMouseOver={mouse2} onMouseOut={MOUSE2}>
                    <div className='IMAGE1234'><img src="https://indianapublicmedia.org/stateimpact/files/2012/02/IMG_0829.jpg" alt="btech" className='btech' /></div>
                    <div className='INSIDEANOTHERCONTAINER'>
                        {THARUN2 && <button className='tharun1234'>77.8%</button>}
                        {!THARUN2 && <div className='navmenu1'>
                        <div className='TharunImage'>
                            <img src={THARUN12} alt='tharun'/>
                            </div>
                            <h1 className='Yogi'>KSN Z.P HIGH SCHOOL</h1>
                            <p className='Years'>2015-2017</p>
                            <button>CGPA : 9.5 CGPA</button>
                            <h3 className='ECE'>SSC,High School</h3>
                            <p className='Kadapa'>Survepalli,Andhra Pradesh,India</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education