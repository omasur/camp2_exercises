import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Animated } from "react-native";
import displayTime from "./displayTime";
import PomodoroDisplay0 from "./PomodoroDisplay0";
// import PomodoroDisplay from "./PomodoroDisplay";

export default class Pomodoro extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    timer: this.props.activeTime,
    pause: false,
    activeSessionLeft: 3
  };
}

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 200); //Appelle la fct tick toute les secondes
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.state.timer > 0) {
      this.setState({timer: this.state.timer - 1});
    } else {
      const activeSessionLeft = this.state.pause ? this.state.activeSessionLeft : this.state.activeSessionLeft - 1;
      if (activeSessionLeft > 0) {
        this.setState({
          timer: this.state.pause ? this.props.activeTime : this.props.pauseTime,
          pause: !this.state.pause,
          activeSessionLeft: activeSessionLeft
        })
      } else {
        this.setState({
          activeSessionLeft: activeSessionLeft
        });
      }
    }
  }

  start = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.tick, 200);
    this.setState({
      timer: this.props.activeTime,
      pause: false,
      activeSessionLeft: 3
    });
  }

  render() {
    return (
        <PomodoroDisplay0
        timer={this.state.timer}
        started={this.state.activeSessionLeft > 0}
        pause={this.state.pause}
        start={this.start}
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
