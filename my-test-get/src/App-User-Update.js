// Call Update service React - Spring boot
// React code - D:\react-development\react-springboot-sathees\my-test-get
// Springboot code - D:\springboot-development\reactspringbootwebsevice

import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        city: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.put(`http://localhost:8080/api/users/${user.id}`, user);

        if (response.status === 200) {
            alert('Success!');
        } else {
            alert('Error!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="id"
                placeholder="User ID"
                value={user.id}
                onChange={handleChange}
            />
            <input
                type="text"
                name="name"
                placeholder="User Name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="User Email"
                value={user.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="city"
                placeholder="User City"
                value={user.city}
                onChange={handleChange}
            />
            <button type="submit">Update User</button>
        </form>
    );
};

export default UpdateUser;