import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import About from '../../Pages/About/About'
import styles from './Navbar.module.css'

export default function Navbar() {


  const [isScrolled, setIsScrolled] = useState(false)
  const handleScroll = ()=>{
    if(window.scrollY >0){
      setIsScrolled(true)
    }else{
      setIsScrolled(false)

    }
  }

  window.addEventListener('scroll', handleScroll);
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarBg} navbar-dark`} style={{padding: isScrolled==true?"10px":"30px" , position:'fixed', transition:'0.3s'}}>
      <div className="container ">
        <Link className={`${styles['navbar-brand']}`} to="">START FRAMEWORK</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             <li className="nav-link">
              <NavLink to='About' className="nav-link">ABOUT</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to='Portfolio' className="nav-link " aria-current="page">PORTFOLIO</NavLink>
            </li>
           
            <li className="nav-link">
              <NavLink to='Contact' className="nav-link">CONTACT</NavLink>
            </li>
            

          </ul>

        </div>
      </div>
    </nav>
  )
}
