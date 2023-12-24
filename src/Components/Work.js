import React from 'react'
import "./Work.css"

const Work = (props) => {
    const { user } = props
    const { image1, information, title, view,source } = user
    return (
        <div className='WholeContainer'>
            <div className='IndividualContainer'>
                <div className='ImageContainer'>
                    <img src={image1} alt='IMAGE1' className='Image12' />
                </div>
                <div>
                    <h2 className='TITLE'>{title}</h2>
                    <div>
                        <p className='information'>{information}</p>
                        <div className='BUTTONSCONTAINER'>
                            <a href={view} target='_blank' rel="noreferrer"><button className='ViewButton'>VIEW</button></a>
                            <a href={source} target='_blank' rel="noreferrer"><button className='ViewButton'>SOURCE</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Work