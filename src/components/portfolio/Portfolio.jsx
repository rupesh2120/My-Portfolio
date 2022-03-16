import React from 'react'
import Social from '../../assets/social.jpg'
import Store from '../../assets/store.jpg'
import Note from '../../assets/note.jpg'
import Connect from '../../assets/connect.jpg'
import Git from '../../assets/git.PNG'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: Social,
    title: 'E-Social',
    github: 'https://github.com/rupesh2120/e-social',
    demo: 'https://developer-social-blog.herokuapp.com/'
  },
  {
    id: 2,
    image: Store,
    title: 'E-Store',
    github: 'https://github.com/rupesh2120/e-store',
    demo: 'https://e-store-foryou.netlify.app/'
  },
  {
    id: 3,
    image: Note,
    title: 'Personal-Notes',
    github: 'https://github.com/rupesh2120/FrontendNotekeeper',
    demo: 'https://personal-notekeeper.netlify.app/'
  },
  {
    id: 4,
    image: Connect,
    title: 'Connect-Intern',
    github: 'https://github.com/rupesh2120/Connect-Intern',
    demo: 'https://serene-ptolemy-cf6368.netlify.app/'
  },
  {
    id: 5,
    image: Git,
    title: 'Github-User-Finder',
    github: 'https://github.com/rupesh2120/Personal-project',
    demo: 'https://githubfinder2120.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo}) => {
          return (
            <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
             <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
             <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
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