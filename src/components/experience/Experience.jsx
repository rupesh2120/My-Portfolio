import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h5>Frontend Tech</h5>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.JS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/* END of Frontend */}

        <div className="experience__backend">
          <h5>Backend Tech and Others</h5>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.JS</h4>
                <small className='text-light'>Experience</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express.JS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
             <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
             <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience