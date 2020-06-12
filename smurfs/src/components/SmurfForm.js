import React, { useContext } from 'react';
import SmurfCard from './SmurfCard'
import { SmurfContext } from '../context'

//import axios from 'axios';





const SmurfForm = () => {

  const {smurfs, addSmurf} = useContext(SmurfContext);

  // const handleFetch = e => {
  //   e.prevemtDefault();
  //   props.getSmurfs();
  // };

  return (
    <div>
      {smurfs.map(smurf => {
        return <SmurfCard 
        name={smurf.name} 
        height={smurf.height} 
        age={smurf.age} 
        key={smurf.id} 
        addSmurf={addSmurf}
        />
      })}
    </div>
  )
  
}



export default SmurfForm;