//import Actions here
import { ADD_SMURFS } from '../actions'

//initial state 

const initialState = {
  smurfs: {},
}

export const smurfReducer = (state=initialState, action) => {
  switch(action.type){
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
      }
    default:
      return state;
  }
};