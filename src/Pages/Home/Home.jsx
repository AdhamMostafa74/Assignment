import React from 'react'
// import img from '../../assets/avataaars.svg'
import style from './Home.module.css'

export default function Home() {
    return (
        <div className={`${style.homeBg}`}>
            <div className="container">
                <div className={`${style['img-container']}  d-flex justify-content-center`}>
                    <img className={`${style.img}`} src={img} alt="avatar" />
                </div>
                <div className={`${style.demo}`}>
                    <h2>START<span></span> FRAMEWORK</h2>
                    <br />
                    <h6 className='mt-3'>Graphic Artist - Web Designer - Illustrator</h6>
                </div>
            </div>
        </div>
    )
}
