import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

//import axios from 'axios';

const SmurfForm = (props) => {
  const {value, name, age, height } = props;
  const [form, setForm] = useState();
  
  const onChange = (e) => {
  
};

  const handleAdd = e => {
    e.preventDefault();
    props.postSmurfs();
  };

  return (

    <div>
      <h2> Add a Smurf</h2>
      <form>
        <div>
          <label>Name: &nbsp;
          <input type='text' placeholder='Name' maxLength='10' value={value.name} onChange={onChange} />
          </label>

          <label>Age: &nbsp;
          <input type='text' placeholder='Age' maxLength='10' value={value.age} onChange={onChange} />
          </label>

          <label>Height: &nbsp;
          <input type='text' placeholder='Height' value={value.height} onChange={onChange} />
          </label>
        </div>
        <div>
        
          <button onClick={handleAdd}> Join the Village </button>
        </div>
      </form>
      
    </div>
  )
  
}

const mSTP = state => {
  return {
    smurfs: state.smurfs,
    isFetchingData: state.isFetchingData
  }
}


export default connect(mSTP,{postSmurfs}) (SmurfForm);