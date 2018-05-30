import {createStore} from "redux"



const initialState = {
  counterValue: 10,
  counterColor: "red",
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    const newCounterValue = state.counterValue + 1;
    return {
      ...state,
      counterValue: newCounterValue
    };

  case 'DECREMENT':
    const newCounterValueDecrement = state.counterValue - action.nbDecrement;
    return {
      ...state,
      counterValue: newCounterValueDecrement
    };

  default:
    return state
  }
}

const store = createStore(counterReducer);

export default store;
