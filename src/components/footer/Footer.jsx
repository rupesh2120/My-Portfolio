import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Rupesh</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/rupesh.sharma.5817300" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/rupesh_sharma21/" target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/sharmarupesh21" target="_blank" rel="noreferrer"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rupesh Sharma. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer