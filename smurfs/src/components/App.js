import React from "react";
import "./App.css";

//import components

import  SmurfForm  from './SmurfForm'
import  SmurfCard  from './SmurfCard'

export default function App() {
  // const [smurfs, setSmurfs] = useState([]); //initial smurfs
  // const [newSmurf, setNewSmurf] = useState(''); //smurf adding
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
     
      <SmurfCard />
        <SmurfForm /> 
      </div>
    ); 
}


