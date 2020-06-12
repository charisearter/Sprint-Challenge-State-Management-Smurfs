//ACTIONS

import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS'; // .get request
export const ADD_SMURFS = 'ADD_SMURFS'; // .post request


export const getSmurfs = () => dispatch => {
  //dispatch({ type: FETCH_SMURFS });
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res.data);
    //setSmurfs(res.data)
    dispatch({ type: FETCH_SMURFS, payload: res.data })
  })
  .catch(err =>
    console.log('There was an error finding the Smurf Village', err.message));
};

//this part works
export const postSmurfs = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURFS });
  axios
  .post('http://localhost:3333/smurfs', {
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  })
  .then((res) => {
    //setSmurfs(res.data);
    console.log('New Smurf found', res.data);
    dispatch({ type: ADD_SMURFS, payload: res.data}) //set payload after completing form
  }) //end then
 .catch(err =>
  console.log('There was an error and we are not allowed in the Smurf Village', err.message));
};