import React, { useState } from 'react';
import {createUser} from '../services/AuthService'


function Signup () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    verifyPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.age.trim()) {
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
    setErrors(newErrors);

    // If there are no errors, you can submit the form
    if (Object.keys(newErrors).length === 0) {
      
      createUser(formData)
      .then(res=>{
        if(res.status===200)
          {
            alert('you are successfully registerd , go to login page to order')
          }
          else
          {
            alert('ohh we missed something ..please try to signup again')
          }

      },error=>{
        alert('someting went wrong')
      })


    }
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" className={`form-control ${errors.age ? 'is-invalid' : ''}`} id="age" name="age" value={formData.age} onChange={handleChange} />
        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" name="email" value={formData.email} onChange={handleChange} />
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

      <button type="submit" className="btn btn-secondary">Sign Up</button>
    </form>
    </div>
  );
};

export default Signup;

