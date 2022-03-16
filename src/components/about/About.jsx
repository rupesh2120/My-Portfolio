import React from 'react'
import ME from "../../assets/me-about.jpeg"
import {FaAward} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiences</h5>
              <small>1+ years of experience</small>
            </article>
            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5>Graduation</h5>
              <small>MTech</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ projects completed</small>
            </article>
          </div>
          <p>
            I did my MTech in Computer Engineering from VJTI, Mumbai.
            I have been working on Javascript, MERN stacks, Django for 
            long time. I did internship as a full stack developer in a
            product based company called Stryker.I also worked in Deloitte. Currently working in
            Fynd. I have developed various web development projects and there links is given below.
            I mostly worked as frontend developer. Learning backend also.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About