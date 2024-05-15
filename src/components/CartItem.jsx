import React from 'react'
import logo from '../images/logo.jpeg'

function CartItem() {
  return (
     <div class="h4 pb-2 mb-4  border-top border-1">
    <div className='d-flex flex-col justify-content-evenly mt-2 mb-2 '>
      <div><img src={{logo}} alt='product'/></div>
      <div>name</div>
      <div>$18.2</div>
      <div><input type='text' placeholder='23'/></div>
      <div><button className='btn btn-secondary '>delete</button></div>
    </div>
    </div>
  )
}

export default CartItem