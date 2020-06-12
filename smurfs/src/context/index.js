//context

import { createContext } from 'react';

export const SmurfContext = createContext();





// export const getSmurfs = () => dispatch => {
//   dispatch({ type: FETCH_SMURFS });
//   axios
//   .get('http://localhost:3333/smurfs/')
//   .then(res => {
//     console.log(res.data.message);
//     dispatch({ type: FETCH_SMURFS, payload: res.data });
//   })
//   .catch(err =>
//     console.log('There was an error finding the Smurf Village', err.message));
// };

// export const addSmurfs = smurf => dispatch => {
//   dispatch({ type: ADD_SMURFS });
//   axios
//   .post('/smurfs', smurf) //add new smurf(?) ('smurfs', newsmurf)
//   .then((res) => {
//       console.log('res');
//       dispatch({ type: ADD_SMURFS }) //need to add payload
//   })
//   .catch((err) => {
//     console.log(err.response);
//   })
// }



