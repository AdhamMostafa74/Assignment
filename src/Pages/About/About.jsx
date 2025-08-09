import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <div className={`${style.demo}`}>
      <h2 >ABOUT<span></span> COMPONENT</h2>
      <div className='d-flex w-50 py-5 justify-content-between'>
        <p className='w-75 pe-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p className='w-75 ps-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  )
}
