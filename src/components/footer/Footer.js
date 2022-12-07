import React, { useState } from 'react'
import './Footer.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anvar_777_</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/@anvar_.777._" target="_blank"><FaInstagramSquare /></a>
        <a href="https://www.facebook.com/profile.php?id=100076338634258" target="_blank"><FaFacebookSquare /></a>
        <a href="https://www.twitter.com/@Anvar_777_" target="_blank"><FaTwitterSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anvar_777_ . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
