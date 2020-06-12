//import Actions here
import { FETCH_SMURFS } from '../actions'

//initial state 

const initialState = {
  smurfs: {},
  isFetchingData: false,
}

export const smurfReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS:
      return {
        ...state,
        isFetchingData: true,
      }
    default:
      return state;
  }
};