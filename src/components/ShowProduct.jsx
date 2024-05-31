import React, { useEffect, useState } from 'react'
import loadMenu from "../services/MenuService"
import TableRow from './TableRow';

function ShowProduct({setActiveTab,editProduct}) {
   
 const [product,setProduct]=useState([]);

function editButtonHandler(product)
{
    editProduct(product);
    setActiveTab(3)

}

  useEffect(()=>{

    loadMenu()
    .then(res=>{
        console.log(res.data)
        setProduct(res.data)
    },error=>{alert("something went wrong")})},[])

  return (
    <div> <div class="container">
    <h4>Product listed on site</h4>
    <table className="table table-striped"
         id="table"
         data-url="json/data1.json"
         data-filter-control="true"
         data-show-search-clear-button="true">  
      <thead>
        <th className='table-light fs-4'>Name </th>
        <th className="table-light fs-4 ">Image</th>
        <th className="table-light fs-4">Price</th>
        <th className="table-light fs-4">Quantity</th>
        <th className="table-light fs-4"> Action</th>     
      </thead>
      <tbody id='tdata'>
        {product.map(row=><TableRow row={row} editButtonHandler={editButtonHandler}  key={row._id}/>)}
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default ShowProduct