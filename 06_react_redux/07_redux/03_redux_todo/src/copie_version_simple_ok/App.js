import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLabel: "",
    };
    this.handleLabelChange = this.handleLabelChange.bind(this);
  }

  handleLabelChange(event) {
    this.setState({
      myLabel: event.target.value
    })
  }

  handlerSubmit(event) {
    event.preventDefault();
    console.log("submit",this.state.myLabel)
    this.props.addTask(this.state.myLabel)
    this.setState({
      myLabel: ""
    })
  }

  handlerClickDelete(index) {
    console.log("delete",index);
    this.props.delTask(index);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <form onSubmit={(eventSubmit) => this.handlerSubmit(eventSubmit)}>
          <input type="text" placeholder="Enter your text" value={this.state.myLabel} onChange={this.handleLabelChange} />
          <button type="submit">Add</button>
        </form>
        <br/>

        <h2>To Do</h2>
        <ul>
          {this.props.myLine.map((myLine, index) =>
          <li key={myLine.id}>
            <input
              type="checkbox"
              value=""
              onChange={() => console.log("onChange")}
            />
            {myLine.label}
            <input type="button" onClick={() => this.handlerClickDelete(index)} value="delete" />
          </li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myTask: state.taskText,
    myLine: state.tasks,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (text) => dispatch({type: "ADDTASK", label: text}),
    delTask: (indexId) => dispatch({type: "DELTASK", indexId: indexId}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
