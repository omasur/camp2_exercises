import React from "react";
import Pomodoro from "./Pomodoro";
// import Pomodoro from "./testAsup";

export default function App(props) {
  return <Pomodoro activeTime={4} pauseTime={2} />;
}
