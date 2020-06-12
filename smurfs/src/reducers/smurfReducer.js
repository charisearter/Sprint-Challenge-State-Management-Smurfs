//import Actions here
import { FETCH_SMURFS, ADD_SMURFS } from '../actions'

//initial state 

const initialState = {
  smurfs: [],
  isFetchingData: false,
}

export const smurfReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: true,
      }
    case ADD_SMURFS:
      return {
        ...state,
        smurfs:  action.payload,
        isFetchingData:false,
      }
    default:
      return state;
  }
};