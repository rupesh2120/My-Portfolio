import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Rupesh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rupesh Sharma. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer