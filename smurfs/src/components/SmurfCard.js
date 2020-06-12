import React from 'react';


export default function SmurfCard(props) {
  return (
    <div>
      <div>
        <h2> {props.name} </h2>
        <p> {props.age} </p>
        <p> {props.height} </p>
        <p> {props.id} </p>
        
      </div>
    </div>
  )
};



