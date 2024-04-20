import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

const TutorialList = () => {
    const [tutorials, setTutorials] = useState([]);
  
    useEffect(() => {
        axios.get("http://localhost:8080/api/tutorials").then(response => {
            setTutorials(response.data);
        });
    }, []);
  
    return (
        <div>
            <h1>Tutorials</h1>
            <ul>
                {tutorials.map(tutorial => (
                    <li key={tutorial.id}>{tutorial.id}-{tutorial.title}-{tutorial.description}</li>
                ))}
            </ul>
        </div>
    );
  };
  
  
  
  export default TutorialList;