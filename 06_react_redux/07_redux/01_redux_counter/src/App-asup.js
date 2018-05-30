import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";




import { createStore } from 'redux'


function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)


store.subscribe(() =>
  console.log("counter", store.getState())
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
    );
  }
}

export default App;

////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Counter : {}</h1>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
    )
      // this.props.increment is available
  // this.props.counter is available
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: "INCREMENT"})
    decrement: () => dispatch({type: "DECREMENT"})
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
