import React, { Component } from "react";
import { connect } from "react-redux";
import { getLines } from "../../store/todo/selectors";
import { addDelTask } from "../../store/todo/handlers";

class Form extends Component {
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

    <form onSubmit={(eventSubmit) => this.handlerSubmit(eventSubmit)}>
      <input type="text" placeholder="Enter your text" value={this.state.myLabel} onChange={eventChange => this.handleLabelChange(eventChange)} />
      <button type="submit">Add</button>
    </form>
  )
  }
}

export default connect(getLines,addDelTask)(Form);
