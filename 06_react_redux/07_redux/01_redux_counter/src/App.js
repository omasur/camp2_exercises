import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    console.log("APP Props = ", props);
    this.handlerClickMoins = this.handlerClickMoins.bind(this);
    this.handlerClickPlus = this.handlerClickPlus.bind(this);
  }

  handlerClickMoins() {
    this.props.myDecrement(1);
  }

  handlerClickPlus() {
    this.props.myIncrement(1);
  }

  render() {
    return (
      <div className="App">
        <h2>Counter = {this.props.counter}</h2>
        <button onClick={this.handlerClickMoins}>-</button>
        <button onClick={this.handlerClickPlus}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counterValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    myIncrement: (nbIncr) => dispatch({type: "INCREMENT", nbIncrement: nbIncr}),
    myDecrement: (nbDecr) => dispatch({type: "DECREMENT", nbDecrement: nbDecr})
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
