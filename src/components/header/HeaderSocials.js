import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anvar-toshpolatov-28177b253/" target="_blank"><FaLinkedin /></a>
        <a href="https://www.github.com/Anvar7777777" target="_blank"><FaGithubSquare /></a>
        <a href="https://www.instagram.com/anvar_.777._" target="_blank"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials