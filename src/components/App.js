
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  const [name,setName]=useState(" ");

const handleInputChange = (event) => {
  setName(event.target.value);
}
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text"
           value={ name} 
           onChange={handleInputChange} 
        >
        </input>
        <p> {name}</p>

    </div>
  )
}

export default App
