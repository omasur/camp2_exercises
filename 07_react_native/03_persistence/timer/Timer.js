import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import TimerDisplay from "./TimerDisplay";


export default class Timer extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    name: "",
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
    this.intervalId = setInterval(this.tick, 1000);
    this.setState({
      started: !this.state.started
    });
  }

  stop = () => {
    clearInterval(this.intervalId);
    this.setState({
      started: !this.state.started,
    });
    this.props.updateTimers(this.state.name, this.state.timer);
  }

  addCounter = (value) => {
    this.setState({
      name: value
    });
  }

  resetCounter = () => {
    clearInterval(this.intervalId); // Pour éviter de laisser tourner le compteur
    this.setState({
      name: "Your counter",
      timer: 0,
      started: false
    });
  }

  histo = () => {
    clearInterval(this.intervalId); // Pour éviter de laisser tourner le compteur
    console.log("Timers: ",this.props.timers);
    this.props.switchToHisto();
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
