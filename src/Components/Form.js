import React, { useState,useRef } from 'react'
import {useForm} from "react-hook-form"
import emailjs from '@emailjs/browser';
import "./Form.css"
const Form = () => {
  console.log(useForm())
  const [state12,setState]=useState(true)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setState(false)
    emailjs.sendForm('service_y5gsfif', 'template_10on7eh', form.current, 'VmWPAmTZzYZAR3gKD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
    }

  return (
    <div className='form'>
       {state12?<form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text"  name="user_name" required/>
            <label>Email</label>
            <input type="email" name="user_email" required/>
            <label>Subject</label>
            <input type="text" required name='subject'/>
            <label>Message</label>
            <textarea rows="6" cols="50" placeholder='Type Your Message Here' name='message'/>
            <button className='ViewButton1'>Submit</button>
        </form>: <p className='Thankyou'>Thank You for message &#128522;
    </p>
}
    </div>
  )
}

export default Form