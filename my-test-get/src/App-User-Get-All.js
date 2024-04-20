// Call Get All service React - Spring boot
// React code - D:\react-development\react-springboot-sathees\my-test-get
// Springboot code - D:\springboot-development\reactspringbootwebsevice

import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:8080/api/users").then(response => {
          setUsers(response.data);
      });
  }, []);

  return (
      <div>
          <h1>Users</h1>
          <ul>
              {users.map(user => (
                  <li key={user.id}>{user.id}-{user.name}-{user.city}-{user.email}</li>
              ))}
          </ul>
      </div>
  );
};



export default UserList;
