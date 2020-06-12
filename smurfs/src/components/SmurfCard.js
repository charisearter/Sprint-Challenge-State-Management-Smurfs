import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfCard = (props) => {

  const handleFetch = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <div>
        <h2> Smurf Villagers</h2>
        <h2> {props.name} </h2>
        <p> {props.age} </p>
        <p> {props.height} </p>
        <p> {props.id} </p>
        
      </div>
      <button onClick={handleFetch}> View the Village </button>
    </div>
  )
};

export default connect(mSTP, {getSmurfs})(SmurfCard);



