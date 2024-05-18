import React from 'react'
import logo from '../images/logo.jpeg'
import { useDispatch, useSelector } from "react-redux";


function Cards() {   

  const dispatch=useDispatch()

 
  
  return (
   <div className="cards border border-10 m-4  ">
    <div className="container m-auto justify-content-center  ">
    <div ><img  className='img-thumbnail' src={logo} alt='product'/></div>
    <div className='text-center '><h4 id='name'>name</h4></div>
    </div>
    <div className="container d-flex flex-col justify-content-evenly ">
        <div><button className="btn btn-secondary ">Add to cart</button></div>
        <div>$18.3</div>
    </div>
   </div>
  )
}

export default Cards