import React from 'react';
import { connect } from 'react-redux';

const SmurfCard = props => {
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

const mSTP = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mSTP, {})(SmurfCard);