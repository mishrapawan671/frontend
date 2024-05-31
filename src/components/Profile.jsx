import React, { useEffect, useState } from 'react'
import { getProfile, updateProfile } from '../services/AuthService';

function Profile () {
  const forminitalstate={
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    password: '',
    verifyPassword: '',
    address: ''
  }
  const [formData, setFormData] = useState(forminitalstate);

  useEffect(()=>{
   getProfile()
   .then(res=>{
     setFormData(res.data);
   })
  },[])

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.firstname.trim()) {
      newErrors.firstname = 'First name is required';
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
    }
    if (formData.age <18) {
      newErrors.age = 'Age is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.verifyPassword) {
      newErrors.verifyPassword = 'Passwords do not match';
    }
    if (!formData.address.trim()) {
      newErrors.verifyaddress = 'Address can not be blank';
    }
    setErrors(newErrors);

    // If there are no errors, you can submit the form
    if (Object.keys(newErrors).length === 0) {
     
      updateProfile(formData)
      .then(res=>{
        if(res.status===200)
        {
          alert("profile updated")
        }
        else
        {
          alert("something went wrong")
        }
      },error=>{
        alert("something went wrong")
      })
    }
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" className={`form-control ${errors.age ? 'is-invalid' : ''}`} id="age" name="age" value={formData.age} onChange={handleChange} />
        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" disabled className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="verifyPassword" className="form-label">Verify Password</label>
        <input type="password" className={`form-control ${errors.verifyPassword ? 'is-invalid' : ''}`} id="verifyPassword" name="verifyPassword" value={formData.verifyPassword} onChange={handleChange} />
        {errors.verifyPassword && <div className="invalid-feedback">{errors.verifyPassword}</div>}
      </div>
       <div className="mb-3">
        <label htmlFor="address" className="form-label">address</label>
        <input type="text-area" className={`form-control ${errors.Address ? 'is-invalid' : ''}`} id="address" name="address" value={formData.address} onChange={handleChange} />
        {errors.verifyPassword && <div className="invalid-feedback">{errors.verifyaddress}</div>}
      </div>

      <button type="submit" className="btn btn-secondary">Upate profile</button>
    </form>
    </div>
  );
};

export default Profile;