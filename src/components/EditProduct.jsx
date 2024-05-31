// src/components/EditForm.js
import React, { useState } from 'react';
import { DeleteProduct, UpdateProduct } from '../services/ProductService';
import { uploadSinglefile } from '../services/fileuploadService';


const EditProduct = ({ product, setActiveTab }) => {
  const [formData, setFormData] = useState({...product,image:null});

  const uploadImage=(e)=>{

    }
 const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDelete=(e)=>{
   e.preventDefault();

    DeleteProduct(product)
    .then(res=>{
      if(res.status===200)
      {
        alert("product deleted")
        setFormData({});
        setActiveTab(1)

      }
    },error=>alert(error))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
      form.append('id',formData['_id'])
      form.append('name', formData['name']);
      form.append('quantity', formData['quantity']);
      form.append('price', formData['quantity']);
      form.append('image',formData['image'] );
      form.append('oldImg',formData['img'] );

      UpdateProduct(form)
      .then(res=>{
        if(res.status===200)
          {
            alert("success")
          }
          else
          {
            alert("failed")
          }
      })
  };

  return (
    <div>
      <h1>Make changes </h1>
      <div></div>
    <form onSubmit={handleSubmit} className="container mt-4" enctype="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text"
          className="form-control "
          id="name"
          name="name"
          value={formData?.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
       <div><a href={"http://localhost:8080/"+formData.img} target='_blank'>preview image</a></div>
        <label htmlFor="img" className="form-label">Image name</label>
        <input
          disabled
          type="text"
          className="form-control"
          id="img"
          name="img"
          value={formData?.img}
          onChange={handleChange}
        />
        </div>
        <div>
        <div className="mb-3">
        <label htmlFor="image" className="form-label">change Image</label>
        <input
          type="file"
          className="form-control"
          id="file"
          name="file"
          onChange={handleImageChange}
        />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={formData?.price}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          value={formData?.quantity}
          onChange={handleChange}
        />
      </div>
      <div>
      <button type="submit" className="btn btn-secondary me-4 " onClick={handleSubmit}>Submit</button>
      <button  className="btn btn-secondary" onClick={handleDelete}>Remove Product</button>
      </div>
    </form>
    </div>
  );
};

export default EditProduct;
