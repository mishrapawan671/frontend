import React from 'react'
import CartItem from './CartItem'

function Cart() {
  return (
    <div className="container ">
      <h1>Shopping Cart</h1>
      <div>
       <CartItem/>   
       <CartItem/>
       <CartItem/>
       <CartItem/>
      </div>
      <div>
         <h1>cart total=</h1>
        <div><button className='btn btn-secondary '> checkout &gt;</button></div>
      </div>
    
    </div>
  )
}

export default Cart