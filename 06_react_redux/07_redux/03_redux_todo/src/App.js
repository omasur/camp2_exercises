import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import Lines from "./modules/todo/Lines";
import Form from "./modules/todo/Form";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Form />
        <br/>
        <h2>To Do</h2>
        <Lines />
      </div>
    );
  }
}


export default connect(null,null)(App);
