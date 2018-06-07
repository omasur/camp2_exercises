import React, {Component} from "react";
import Timer from "./Timer";
// import Pomodoro from "./testAsup";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [],
      screen: "Timer",
    };
    // this.updateTimers=this.updateTimers.bind(this);
  }

  updateTimers (name, timer) {
    console.log("this: ", this);
    console.log("name, timer", name, timer);
    const toto = this.timers;
    const titi = [...toto, {name: name, timer: timer}];
    console.log("titi=", titi);
    this.setState({
      timers: titi
    });
  }

  render() {
    if (this.state.screen === "Timer") {
      return <Timer timers={this.state.timers} updateTimers={this.updateTimers}/>
    } else {
      <Text>
        Hello
      </Text>
    }
  }
}
