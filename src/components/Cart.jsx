import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart,AddtoCart,Removeall} from "../reducers/CartReducers"

import { useNavigate } from "react-router-dom";


function Cart() {
   const productList=useSelector(state=>state.CartReducer.products)
   const navigate=useNavigate()
   const total=productList.length>0 ? 
   productList.reduce((pre=0,product)=>pre+(product.price*product.count),0) :0

   const dispatch=useDispatch()
   function deleteHandler(item)
   {
    dispatch(removeFromCart(item))
   }
   function incrementHandler(item)
   {
    dispatch(AddtoCart(item))
   }
    function deleteHandler(item)
   {
    dispatch(removeFromCart(item))
   }
   function deleteitem(item)
   {
    dispatch(Removeall(item))
   }
  return (
    <div className="container ">
      <h1>Shopping Cart</h1>
      <div>
      {productList.map((product)=>
      <CartItem product={product} 
      incrementHandler={incrementHandler}
      deleteHandler={deleteHandler}
      deleteitem={deleteitem}
      />)}
      </div>
      <div>
         <h1>cart total={total}$</h1>
        <div><button className='btn btn-secondary ' onClick={()=>navigate('/Checkout')}> checkout &gt;</button></div>
      </div>
    
    </div>
  )
}

export default Cart