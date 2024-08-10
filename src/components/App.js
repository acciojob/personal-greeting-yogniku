
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () =>{
  const [name,setName]=useState('');

    const handleInputChange = (event) => {
      setName(event.target.value);
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your name:</h1>
        <input type="text"
           value={name} 
           onChange={handleInputChange } 
           
        />
        
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
