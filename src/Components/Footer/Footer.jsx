import React from 'react'
import style from './Footer.module.css'
import { FaFacebook, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <div className={` ${style.footerBg} text-white`}>
      <div className="upperFooter p-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5 text-center ">
              <h2>LOCATION</h2>
              <h4>2215 John Daniel Drive</h4>
              <h4>Clark, MO 65243</h4>
            </div>
            <div className="col-md-4 p-5 text-center ">
              <h2>AROUND THE WEB</h2>
             <ul className='list-unstyled d-flex flex-row justify-content-center gap-3'>
              <li className={`${style.roundedIcon}`}>
                  <FaFacebook fontSize={'25px'} />
              </li>
              <li className={`${style.roundedIcon}`}>
                  <FaTwitter fontSize={'25px'} />
              </li>
              <li className={`${style.roundedIcon}`}>
                  <FaLinkedin fontSize={'25px'} />
              </li>
              <li className={`${style.roundedIcon}`}>
                  <FaGlobe fontSize={'25px'} />
              </li>
             </ul>
            </div>
            <div className="col-md-4 p-5 text-center ">
              <h2>ABOUT FREELACNER</h2>
              <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>

      </div>
      <div className={`lowerFooter text-center ${style.lowerFooterBg}`}>
        <p className='m-0 p-4'>Copyright © Your Website 2025</p>
      </div>
      </div>
  )
}
