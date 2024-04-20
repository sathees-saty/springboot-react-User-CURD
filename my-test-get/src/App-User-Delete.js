// Call Delete service React - Spring boot
// React code - D:\react-development\react-springboot-sathees\my-test-get
// Springboot code - D:\springboot-development\reactspringbootwebsevice

import React, { useState } from "react";
import axios from "axios";

const DeleteService = () => {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      alert("User deleted successfully!");
    } catch (error) {
      alert("Error deleting User!");
    }
  };

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteService;