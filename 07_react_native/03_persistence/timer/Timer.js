import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
// import displayTime from "./displayTime";
import TimerDisplay from "./TimerDisplay";
// import HistoDisplay from "./HistoDisplay";

export default class Timer extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    // timers: [],
    name: "Your counter",
    timer: 0,
    started: false
  };
}

  tick = () => {
    this.setState({
      timer: this.state.timer + 1,
    });
  }

  start = () => {
    // console.log("TimerS name: ",this.state.timers[0].name);
    this.intervalId = setInterval(this.tick, 1000);
    this.setState({
      started: !this.state.started
    });
  }

  stop = () => {
    clearInterval(this.intervalId);
    this.setState({
      started: !this.state.started,
      // props.timers: [...props.timers, {name: this.state.name, timer: this.state.timer}]
    });
    this.props.updateTimers(this.state.name, this.state.timer);

  }

  addCounter = (value) => {
    this.setState({
      name: value
    });
    // console.log("name ecrit:", this.state.name);
    // console.log("timer ecrit:", this.state.timer);
    // console.log("started ecrit:", this.state.started);
  }

  resetCounter = () => {
    this.setState({
      name: "Your counter",
      timer: 0,
      started: false
    });
  }

  histo = () => {
    // console.log("Timers: ",this.state.timers);
    // histoDisplay(this.state.timers);
    // export default function HistoDisplay(props) {
    //   return <HistoDisplay timers={this.state.timers}/>;
    // }
  }

  render() {
    return (
        <TimerDisplay
          name={this.state.name}
          timer={this.state.timer}
          started={this.state.started}
          start={this.start}
          stop={this.stop}
          addCounter={this.addCounter}
          resetCounter={this.resetCounter}
          histo={this.histo}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});


// componentDidMount() {
//   console.log(this.state.timers);
//   // this.intervalId = setInterval(this.tick, 1000); //Appelle la fct tick toute les secondes
// }

// componentWillUnmount() {
//   clearInterval(this.intervalId);
// }
