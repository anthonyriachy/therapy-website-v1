import React, { useState } from 'react';

function RegisterComponent() {
  // Initialize mode with a string value
  const [mode, setMode] = useState('signIn');

  // Initialize formData with default values for each field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    sex: ''
  });

  // Submit handler to prevent the default form submission behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  // Change handler to update formData state when input values change
  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <p>{mode === 'signIn' ? 'Sign In' : 'Sign Up'}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleFormDataChange} 
          placeholder="Name" 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleFormDataChange} 
          placeholder="Email" 
        />
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleFormDataChange} 
          placeholder="Password" 
        />
        <input 
          type="text" 
          name="sex" 
          value={formData.sex} 
          onChange={handleFormDataChange} 
          placeholder="Sex" 
        />
        <button type="submit">{mode === 'signIn' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </section>
  );
}

export default RegisterComponent;
