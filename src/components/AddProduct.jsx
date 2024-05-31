 import React, { useState } from 'react';
 import { Addproducts } from '../services/ProductService';

function AddProduct ()  {
  const initialform={
    name: '',
    quantity: 1,
    price: '',
    image: null
  }
  const [formData, setFormData] = useState(initialform);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here, such as sending the data to a server
      const form = new FormData();
      form.append('name', formData['name']);
      form.append('quantity', formData['quantity']);
      form.append('price', formData['quantity']);
      form.append('image',formData['image'] );

       Addproducts(form)
       .then(res=>{
          if(res.status===200)
            {
              alert("product saved successfully")
              setFormData(initialform)
              

            }
       },er=>{
        alert("something wrong happend? contact support team")
       })

  };

  return (
    <div className='container'>
      <h3>Add New Product</h3>
    <form onSubmit={handleSubmit} enctype="multipart/form-data" >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity</label>
        <input type="number" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input type="number" step="0.01" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image</label>
        <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} accept="image/*" />
      </div>
      <button type="submit" className="btn btn-secondary">Add Product</button>
    </form>
    </div>
  );
};


export default AddProduct;