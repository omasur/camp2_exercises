import React, {Component} from "react";
import {Text} from "react-native";
import Timer from "./Timer";
import HistoDisplay from "./HistoDisplay";

let screenC = "Timer"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [],
      screen: "Timer",
    };
    this.updateTimers = this.updateTimers.bind (this);
    this.switchToHisto = this.switchToHisto.bind (this);
    this.switchToTimer = this.switchToTimer.bind (this);
  }

  updateTimers (name, timer) {
    this.setState({
      timers: [... this.state.timers, {name: name, timer: timer}]
      // AsyncStorage.setItem("/Counter/value", this.state.counter.toString());
      // Comment stocker le counter avec son nom ?
    });
  }

  // Comment switcher avec pb des promesses "non tenues" !

  switchToHisto () {
    this.setState({
      screen: "Histo",
    });
    // screenC = "Histo"
  }

  switchToTimer () {
    console.log("switchToTimer done: ", this.switchToTimer);
    this.setState({
      screen: "Timer",
    });
    // screenC = "Timer"
  }


  render() {
    if (this.state.screen === "Timer") {
      return <Timer timers={this.state.timers} updateTimers={this.updateTimers} switchToHisto={this.switchToHisto}/>
    } else if (this.state.screen === "Histo") {
      console.log("Histo");
      // return 0;
      return <HistoDisplay timers={this.state.timers} switchToTimer={this.switchToTimer}/>;
    }
    else {
      return (
        <Text>
          Other screen
        </Text>
      )
    }
  }
}
