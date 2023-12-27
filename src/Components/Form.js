import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.css"
const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y5gsfif', 'template_10on7eh', form.current, 'VmWPAmTZzYZAR3gKD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
    }

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text"  name="user_name" required/>
            <label>Email</label>
            <input type="email" name="user_email" required/>
            <label>Subject</label>
            <input type="text" required name='subject'/>
            <label>Message</label>
            <textarea rows="6" cols="50" placeholder='Type Your Message Here' name='message'/>
            <button className='ViewButton1'>Submit</button>
        </form>
    </div>
  )
}

export default Form