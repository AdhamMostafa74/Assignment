import React, { useState } from 'react'
import style from './Contact.module.css'
export default function Contact() {


  const [formData, setFormData] = useState({
    name:'',
    email:'',
    age:'',
    password:'',
  })


  const handlechange =(e)=>{
    setFormData({...formData,[e.target.name]:[e.target.value] })
  }
  return (

   <>
      <div className={`${style.demo} `}>
        <h2 className='my-5 pt-5' >CONTACT<span></span> SECITON</h2>
      </div>
      <div className="container pt-5">

        <div className="row justify-content-center">
          <div className="col-md-9">
            <form action="">
              <input className='form-control my-3' type="text" name="name" id="userName" value={formData.name} onChange={(e)=> handlechange(e)} placeholder='Fullname'/>
            </form>
          </div>
          <div className="col-md-9">
            <form action="">
              <input className='form-control my-3' type="email" name="email" id="userEmail" value={formData.email} onChange={(e)=> handlechange(e)} placeholder='Email'/>
            </form>
          </div>
          <div className="col-md-9">
            <form action="">
              <input className='form-control my-3' type="password" name="password" id="userPassword" value={formData.password} onChange={(e)=> handlechange(e)} placeholder='Password'/>
            </form>
          </div>
          <div className="col-md-9">
            <form action="">
              <input className='form-control my-3' type="number" name="age" id="userAge" value={formData.age} onChange={(e)=> handlechange(e)} placeholder='Age'/>
            </form>
            <button className={` btn  my-3  ${style.btnBg} `} type='submit' >Send Message</button>
          </div>
        </div>
       
      </div>
      </>
  )
}
