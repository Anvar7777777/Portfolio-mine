import React from 'react'
import './About.css'
import ME from '../../assets/portfolio main3.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutPhoto" />
          </div>
        </div>
      

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>Near a Year</small>
          </article>

          <article className="about__card">
            <FaUsers className='about__icon' />
            <h5>Clients</h5>
            <small>Worldwide</small>
          </article>

          <article className="about__card">
            <FaFolder className='about__icon' />
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
        </div>

          <p>I'm always looking for opportunities to expand upon my skillls and am currently seeking a full-time web developer position or internship.I'd also love to hear from you if you have any questions, are looking to network, or would like to chat about any projects I can help to you</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About