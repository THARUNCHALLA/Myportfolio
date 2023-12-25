import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text" required/>
            <label>Email</label>
            <input type="email" required/>
            <label>Subject</label>
            <input type="text" required/>
            <label>Message</label>
            <textarea rows="6" cols="50" placeholder='Type Your Message Here'/>
            <button className='ViewButton1'>Submit</button>
        </form>
    </div>
  )
}

export default Form