import React, { useEffect, useState } from 'react'
import loadMenu from '../services/MenuService'
import EditProduct from './EditProduct'
import TableRow from './TableRow';
import AddProduct from './AddProduct'
import ShowProduct from './ShowProduct'
import Order from './Orders'


const Admindashboard=()=>{

  const [activeTab,setActiveTab]=useState(1);
   const [product,setproductToEdit]=useState({});

   const editProduct=(product)=>
   {
    setproductToEdit(product)
    setActiveTab(3);
   }
 
  return(
    <div className='container'>
      <p class="d-inline-flex gap-1">
      <button className='btn btn-secondary' type="button" onClick={()=>setActiveTab(1)}>Product list</button>
      <button className="btn btn-secondary" type="button" onClick={()=>setActiveTab(2) }>AddProduct</button>
      <button class="btn btn-secondary" type="button" onClick={()=>setActiveTab(3)}>EditProduct</button>
      <button class="btn btn-secondary" type="button" onClick={()=>setActiveTab(4)}>Current Orders</button>
    </p>
    <div> { activeTab===1 ?<ShowProduct setActiveTab={setActiveTab} editProduct={editProduct}/> 
          : activeTab===2 ? <AddProduct setActiveTab={setActiveTab}/>
          :activeTab===3?<EditProduct setActiveTab={setActiveTab} product={product}/>
          :<Order/>} </div>
   
    </div>
  )
}


 export default Admindashboard



{/* 

{/* // src/components/ItemForm.js
// import React, { useState, useEffect } from 'react';<EditProduct initialData={product[0]} onSubmit={onSubmit}/>

// const Admindashboard = ({ item, onSave, onCancel }) => { */}
//   const [formData, setFormData] = useState({ name: '', img: '', price: '', quantity: '' });

//   useEffect(() => {
//     if (item) {
//       setFormData(item);
//     }
//   }, [item]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     setFormData({ name: '', img: '', price: '', quantity: '' });
//   };

//   return (
//     <form className="container mb-4" onSubmit={handleSubmit} >
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//         <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
//       </div>
//       <div className="mb-3">
//         <div><img src={"localhost:8080/"+img}/></div>
//         <label htmlFor="img" className="form-label">Image URL</label>
//         <input type="file" className="form-control" id="img" name="img"  />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="price" className="form-label">Price</label>
//         <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="quantity" className="form-label">Quantity</label>
//         <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
//       </div>
//       <button type="submit" className="btn btn-secondary">Save</button>
//       <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancel</button>
//     </form>
//   );
// };

// export default Admindashboard; */}
