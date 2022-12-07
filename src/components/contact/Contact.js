import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {ImTelegram} from 'react-icons/im'
import {BsTelephoneFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8km1nnc', 'template_vgue9cu', form.current, 'XgZMwsbnyLy9plZDA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option_icon'/>
            <h4>Email</h4>
            <h5>toshpolatovanvar777@gmail.com</h5>
            <a href="mailto:toshpolatovanvar@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <ImTelegram className='contact__option_icon'/>
            <h4>Messenger</h4>
            <h5>@An_var5704</h5>
            <a href="tg://An_var5704" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsTelephoneFill className='contact__option_icon'/>
            <h4>Number</h4>
            <h5>+998 90 183 7375</h5>
            <a href="tel:+998901837375" target='_blank'>Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact