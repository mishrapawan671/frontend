import React, { useEffect, useState } from 'react'
import { GetAllOrder, changeStatus } from '../services/OrderService';
import OrderCard from './OrderCard'


const statusStyles = {
  completed: { color: 'green', fontWeight: 'bold' },
  pending: { color: 'orange', fontWeight: 'bold' },
  cancelled: { color: 'red', fontWeight: 'bold' }
};

function Orders() {
const[orders,setorders]=useState([])
const [reload,setereload]=useState(0);



 useEffect(()=>{
  GetAllOrder().then(res=>{
    setorders(res.data)
  })
 },[reload])

 function updateStatus(data)
 {
   changeStatus(data)
   .then(res=>{
    if(res.status===200)
      {
        setereload(reload+1);
      }
     
   })
 
 }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Previous Orders</h2>
      <div className="row">
        {orders.map((order) =><OrderCard order={order} updateStatus={updateStatus} />)}
      </div>
    </div>
  );
}

export default Orders