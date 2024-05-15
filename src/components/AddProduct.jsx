 import React, { useState } from 'react';

function AddProduct ()  {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    price: '',
    image: null
  });

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
    console.log('Form submitted:', formData);
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="productName" name="productName" value={formData.productName} onChange={handleChange} />
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
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    </div>
  );
};


export default AddProduct;