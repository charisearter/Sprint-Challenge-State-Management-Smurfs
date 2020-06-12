import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

//import axios from 'axios'



const SmurfForm = (props) => {
 
  const [form, setForm] = useState({
    name:'',
    age: '',
    height: ''
  });
  

  const onChange = (e) => {
  e.persist();
   setForm({
     ...form,
     [e.target.name] : e.target.value
   })
};

  const handleAdd = e => {
    e.preventDefault();
    props.postSmurfs(form); //pass in the state of the form
  };

  return (

    <div>
      <h2> Add a Smurf</h2>
      <form>
        <div>
          <label>Name: &nbsp;
          <input type='text' placeholder='Name' name='name' maxLength='10' onChange={onChange} />
          </label>

          <label>Age: &nbsp;
          <input type='text' placeholder='Age' name='age' maxLength='10'  onChange={onChange} />
          </label>

          <label>Height: &nbsp;
          <input type='text' placeholder='Height' name='height'  onChange={onChange} />
          </label>
        </div>
        <div>
        
          <button onClick={handleAdd}> Join the Village </button>
        </div>
      </form>
      
    </div>
  )
  
}

// const mSTP = state => {
//   return {
//     smurfs: state.smurfs,
//     isFetchingData: state.isFetchingData
//   }
// }


export default connect(null,{postSmurfs}) (SmurfForm);