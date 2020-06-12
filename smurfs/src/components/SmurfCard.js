import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfCard = (props) => {
useEffect(() =>{
  props.getSmurfs()
}, []
)
console.log(props.smurfs)
  const handleFetch = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div>
      <div>
        {props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <h2> {smurf.name} </h2>
              <p> {smurf.age } </p>
              <p> {smurf.height } </p>
            </div>
          )
        })}
        
      </div>
      <button onClick={handleFetch}> View the Village </button>
    </div>
  )
};
const mSTP = state => {
  return {
    smurfs: state.smurfs,
    isFetchingData: state.isFetchingData
  }
}

export default connect(mSTP, {getSmurfs})(SmurfCard);



