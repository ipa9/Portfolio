import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='about__navbar'>
      <div className='about__navbar-links'>
        <div className='about__navbar-links_logo'>
          <img src= {logo} alt='logo'/>
        </div>
        <div className='about__navbar-links_contatiner'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt'>What is GPT</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='about__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='about__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size='27' onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size='27' onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className='about__navbar-menu_container scale-up-tr'>
            <div className='about__navbar-menu_container-links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#wgpt'>What is GPT</a></p>
              <p><a href='#features'>Case Studies</a></p>
              <p><a href='#possibility'>Open AI</a></p>
              <p><a href='#blog'>Library</a></p>
              <div className='about__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>  
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar