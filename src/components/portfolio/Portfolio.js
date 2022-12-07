import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio netflix2.jpg'
import IMG2 from '../../assets/portfolio shop3.jpg'
import IMG3 from '../../assets/portfolio translator.png'
import IMG4 from '../../assets/portfolio github-wallpaper.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Netflix Clone App, New Movies',
    github: 'https://github.com/Anvar7777777/Movie-app',
    demo: 'https://tiny-genie-48d93e.netlify.app'
  },
  {
    id:2,
    image:IMG2,
    title:'Fake store, Market app, Online shop',
    github: 'https://github.com/Anvar7777777/Fake-store',
    demo: 'https://unique-beignet-89cedd.netlify.app'
  },
  {
    id:3,
    image:IMG3,
    title:'Dictionary, Translator, English translator',
    github: 'https://github.com/Anvar7777777/Dictionary',
    demo: 'https://effervescent-torrone-b1699f.netlify.app'
  },
  {
    id:4,
    image:IMG4,
    title:'GitHub clone, Find Github accounts',
    github: 'https://github.com/Anvar7777777/Find-github-profile',
    demo: 'https://find-github-profile.vercel.app'
  },
  {
    id:5,
    image:IMG5,
    title:'Currency Dashboard',
    github: 'https//github.com',
    demo: 'https//netlify.com'
  },
  {
    id:6,
    image:IMG6,
    title:'Currency Dashboard',
    github: 'https//github.com',
    demo: 'https//netlify.com'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo}) => {
        return(
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Netlify</a>
            </div>
          </article>
        )
      })
    }

      </div>
    </section>
  )
}

export default Portfolio