import React, {useRef} from 'react'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

import './contact.css'
const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vsdpetk', 'template_cmde46e', form.current, 'haEBfR_mlxeUL_Ov8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-item'/>
            <h4>Email</h4>
            <h5>sharmarupesh2120@gmail.com</h5>
            <a href="mailto:rupeshsharma2196@gmail.com" target="_blank">Send a message</a>
          </article>
          {/* <article className='contact__option'>
            <RiMessengerLine className='contact__option-item'/>
            <h4>Messenger</h4>
            <h5>Rupesh Sharma</h5>
            <a href="https://m.me/rupesh.sharma" target="_blank">Send a message</a>
          </article> */}
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-item'/>
            <h4>WhatsApp</h4>
            <h5>8976393078</h5>
            <a href="https://api.whatsapp.com/send?phone=+918976393078" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name...' required />
          <input type="email" name='email' placeholder='Your mail' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact