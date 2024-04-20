// Call Insert service React - Spring boot
// React code - D:\react-development\react-springboot-sathees\my-test-get
// Springboot code - D:\springboot-development\reactspringbootwebsevice

import React, { useState } from 'react';
import axios from 'axios';

const InsertData = () => {
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id,
      name,
      email,
      city,
    };

    await axios.post('http://localhost:8080/api/users', data);

    // Clear the form
    setID('');
    setName('');
    setEmail('');
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
       <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
        <br></br>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        type="city"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InsertData;