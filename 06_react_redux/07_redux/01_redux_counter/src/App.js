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
    this.props.mondecrement(2);
  }

  handlerClickPlus() {
    this.props.increment();
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
    increment: () => dispatch({type: "INCREMENT"}),
    mondecrement: (nb) => dispatch({type: "DECREMENT", nbDecrement: nb})
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
