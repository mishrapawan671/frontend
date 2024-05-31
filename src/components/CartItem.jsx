import React from 'react'
import logo from '../images/logo.jpeg'


function CartItem({product,incrementHandler,deleteHandler,deleteitem}) {
  const {id,name,price,count,img}=product;
  
  // function handler(event)
  // {
  //   event.preventDefault();
  //   deleteHandler(id);
  // }
  // function incrementHandler(event)
  // {
  //   event.preventDefault()
    
  //   incrementHandler(product)
  // }
  return (
     <div class="h4 pb-2 mb-4  border-top border-1">
    <div className='d-md-flex flex-col justify-content-evenly mt-2 mb-2 '>
      <div><img style={{height:67}}src={'http://localhost:8080/'+img} alt='product'/></div>
      <div>{name}</div>
      <div>{price}$</div>
      <div ><button  className='btn btn-secondary d-flex ' onClick={()=>{ incrementHandler(product)}} >+</button >
      <label className='justify-content-center d-flex  ' style={{width:30}}>{count}</label>
      <button  className='btn btn-secondary  d-flex ' onClick={()=>{deleteHandler(product)}}>-</button>
      </div>
      <div><button className='btn btn-secondary d-flex ' onClick={()=>{deleteitem(product)}}>delete</button></div>
    </div>
    </div>
  )
}

export default CartItem