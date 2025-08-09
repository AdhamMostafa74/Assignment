import React, { useState } from 'react'
import style from './Portfolio.module.css'
import { FaPlus } from "react-icons/fa";

export default function Portfolio() {

  const imgs = Object.values(import.meta.glob('../../assets/*.png', { query: '?url', import: 'default', eager: true }))
  const [openModal, setOpenModal] = useState(false)
  const [clickedImg, setClickedImg] = useState(null)
  console.log(imgs)

  return (
    <>
      <div className={`${style.demo}`}>
        <h2 className='my-5'>PORTFOLIO <span></span>COMPONENT</h2>
        <div className="container">
          <div className="row">
            {
              imgs.map((img, index) => (
                <div className={`col-md-4 p-4 `} key={index}>
                  <div className={` ${style.protfolioImg}`} onClick={() => { setOpenModal(true); setClickedImg(index); console.log(index) }}>
                    <img src={img} alt="" className='w-100 rounded-3' />
                    <div className={`position-absolute ${style.protfolioIcon}`}>
                      <FaPlus z={500} fontSize={'80px'} />

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="row ">
            {
              imgs.map((img, index) => (
                <div className={`col-md-4 p-4 `} key={index}>
                  <div className={` ${style.protfolioImg}`} onClick={() => { setOpenModal(true); setClickedImg(index); console.log(index) }}>
                    <img src={img} alt="" className='w-100 rounded-3' />
                    <div className={`position-absolute ${style.protfolioIcon}`}>
                      <FaPlus z={500} fontSize={'80px'} />

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {
        openModal && <div className={` d-flex justify-content-center align-items-center ${style.clickedImg}`} onClick={() => { setOpenModal(false) }}>
          {clickedImg !== null &&
            <img src={imgs[clickedImg]} alt="" className='w-25   rounded-3' onClick={() => { setOpenModal(false) }} />

          }
        </div>
      }
    </>

  )
}


// <div className="col-md-4">
//           <img className='w-100' src={imgs[1]} alt="" />
//         </div>
//         <div className="col-md-4">
//           <img className='w-100' src={imgs[1]} alt="" />
//         </div>
//         <div className="col-md-4">
//           <img className='w-100' src={imgs[1]} alt="" />
//         </div>




