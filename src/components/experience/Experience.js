import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>MY Experience</h2>

      <div className="container experience__container">
        <div className="experience__content">
        <h3>Frontend Development</h3>

          <div className="frontend-part">

          <div>

          <article className='experience__details'>
            <BsPatchCheckFill  className='experience-check-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill  className='experience-check-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill  className='experience-check-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          </div>

          <div>

          <article className='experience__details'>
            <BsPatchCheckFill  className='experience-check-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill  className='experience-check-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill  className='experience-check-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience