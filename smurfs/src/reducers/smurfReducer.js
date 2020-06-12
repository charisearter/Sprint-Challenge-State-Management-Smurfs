//import Actions here
import { FETCH_SMURFS } from '../actions'

//initial state 

const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
  }
],
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