import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/portfolio finaly2.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Anvar Davronovich</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img className='my-picture' src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header