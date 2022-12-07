import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {FaServicestack} from 'react-icons/fa'
import {RiContactsLine} from 'react-icons/ri'
import {useState} from 'react'


function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#active' ? 'active' : ''}><FaUserAlt /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'experience' : ''}><FaBook /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'services' : ''}><FaServicestack /></a>
        <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav ==='#contacts' ? 'contacts' : ''}><RiContactsLine /></a>
    </nav>
  )
}

export default Nav