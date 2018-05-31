import React, { Component } from "react";
import { connect } from "react-redux";
import { getLines } from "../../store/todo/selectors";
import { addDelTask } from "../../store/todo/handlers";



class Lines extends Component {
  handlerClickDelete(index) {
    console.log("delete",index);
    this.props.delTask(index);
  }

  render() {
    console.log(this.props);
    return (
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
    )
  }
}

export default connect(getLines,addDelTask)(Lines);
