import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import Lines from "./modules/todo/Lines";
// import Form from "./modules/todo/Form";
import { addDelTask } from "./store/todo/handlers";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLabel: "",
    };
    // this.handleLabelChange = this.handleLabelChange.bind(this);
  }

  handleLabelChange(event) {
    this.setState({
      myLabel: event.target.value
    })
  }

  handlerSubmit(event) {
    event.preventDefault();
    console.log("submit",this.state.myLabel);
    this.props.addTask(this.state.myLabel);
    this.setState({
      myLabel: ""
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <form onSubmit={(eventSubmit) => this.handlerSubmit(eventSubmit)}>
          <input type="text" placeholder="Enter your text" value={this.state.myLabel} onChange={eventChange => this.handleLabelChange(eventChange)} />
          <button type="submit">Add</button>
        </form>
        <br/>

        <h2>To Do</h2>
        <Lines />
      </div>
    );
  }
}


export default connect(null,addDelTask)(App);
