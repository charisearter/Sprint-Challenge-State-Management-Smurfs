import React, { useState } from "react";
import "./App.css";


//import components

import  SmurfForm  from './SmurfForm'

//Context

import { SmurfContext } from '../context'

const initialState = [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
]

export default function App() {

  const [smurfs] = useState(initialState);
  const [newSmurf, setNewSmurf] = useState();

  const addSmurf = item => {
    setNewSmurf([...smurfs, newSmurf]);
  };
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
     
     <SmurfContext.Provider value={{ smurfs, addSmurf }}>
        <SmurfForm />
        </SmurfContext.Provider>
      </div>
    );
  
}


