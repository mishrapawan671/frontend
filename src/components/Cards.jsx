import React from 'react'
import logo from '../images/logo.jpeg'
import { useDispatch} from "react-redux";
import {AddtoCart} from "../reducers/CartReducers"


function Cards(data) {   

  const dispatch=useDispatch();
  const{_id,img,name,price}=data.data

  const cardDetail={"id":_id,"img":img,"name":name,"price":price}

  function addHandler(event)
  {
    event.preventDefault();
    dispatch(AddtoCart(cardDetail))
  }
  
  
  return (
   <div className="cards border border-10 m-4 rounded-2   ">
    <div className="container m-auto justify-content-center  " id={_id}>
    <div className='mt-2 r '><img className='rounded-3' style={{height:168,width:240}} src={"http://localhost:8080/"+img} alt='product'/></div>
    <div className='text-center '><h4 id='name'>{name}</h4></div>
    </div>
    <div className="container d-flex flex-col justify-content-evenly mb-2  ">
        <div><button className="btn btn-secondary " onClick={addHandler}>Add to cart</button></div>
        <div><h6>{price} $</h6></div>
    </div>
   </div>
  )
}

export default Cards