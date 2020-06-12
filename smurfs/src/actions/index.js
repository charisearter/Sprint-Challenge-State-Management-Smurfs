//ACTION PAGE

import axios from 'axios';

//api calls
export const FETCH_SMURFS = 'FETCH_SMURFS';

//api post
export const ADD_SMURFS = 'ADD_SMURFS';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
  .get('/smurfs')
  .then(res => {
    console.log(res);
    dispatch({ type: FETCH_SMURFS, payload: res.data });
  })
  .catch(err =>
    console.log('There was an error finding the Smurf Village', err.message));
};



