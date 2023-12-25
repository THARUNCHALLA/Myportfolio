import React from 'react'
import IMAGE from "../assets/Screenshot 2023-12-24 184315.png"
import IMAGE1 from "../assets/Screenshot 2023-12-24 194639.png"
import IMAGE2 from "../assets/Screenshot 2023-12-24 195158.png"
import Work from "./Work"
import "./WorkCard.css"


const projectData = [
    {
        image1: IMAGE,
        title: "Ecommerce Website",
        information: "Essentially, eCommerce websites are designed to connect the right customers with products and services that can be traded over the internet. From tiny businesses to huge markets, everyone is prospering from eCommerce.username:rahul and password:rahul@2021",
        view: "https://next45.ccbp.tech/",
        source:"https://github.com/THARUNCHALLA/Tharun",
        id:1
    },
    {
        image1: IMAGE1,
        title: "Ipl Dashboard",
        information: "The Indian Premier League, or IPL, is a T20 cricket league, which was founded in 2008 and is held every year. It sees participation from both national and international players, and eight teams representing eight Indian cities compete in a double round-robin format in the league stages, which are followed by playoffs.", 
        view: "https://ipl45.ccbp.tech/",
        source:"https://github.com/THARUNCHALLA/IPL",
        id:12
    },
    {
        image1: IMAGE2,
        title: "Emoji Game",
        information: "In Emoji Game, you can test your knowledge of emojis as you try to match them together! Everyone uses emojis when texting, and it's important to know which one to use for the best communication.",
        view: "https://emoji45.ccbp.tech/",
        source:"https://github.com/THARUNCHALLA/Emoji-Game",
        id:13
    },
]


const WorkCard = () => {
  return (
    <div className='tharuncontainer'>
        <h1 className='projectHeading'>Projects</h1>
       <ul className='UNORDERED'>
       {projectData.map(each=><Work user={each} key={each.id}/>)}
       </ul>
    </div>
  )
}

export default WorkCard