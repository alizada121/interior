import React from 'react'
import Logo from './Logo'
import Navbar from './menu/Navbar'

import "../header/Header.css"

function Header() {
  return (
      <div className='header-container'>
          <div className='header'>
            <Logo/>
            <Navbar/>
          </div>
          <div className='navbar-line'></div>
        
      </div>
   
  )
}

export default Header