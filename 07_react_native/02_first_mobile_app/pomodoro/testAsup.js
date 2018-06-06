import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Animated, Button } from "react-native";
// import displayTime from "./displayTime";
// import PomodoroDisplay from "./PomodoroDisplay";

export default class Pomodoro extends React.Component {
  constructor() {
  super();
  this.animated = new Animated.Value(0);
  }

  animate() {
    Animated.timing(this.animated,{
      toValue: 1,
      duration: 3000,
    }).start();
  }

  render() {
    const opacity = this.animated.interpolate({
      inputRange:[0,1],
      outputRange: [1,0],
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text >TITLE</Text>
        </View>

          <Animated.Text style={[styles.textStyle, {backgroundColor: 'transparent'}, {opacity: opacity}]}>
            Good Job
          </Animated.Text>

        <View style={styles.menuHeader}>
          <Button title="Click" onPress={() => this.animate()} />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow : 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flex:0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 85,
    backgroundColor: 'powderblue',
  },
  body: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  menuHeader: {
    // flex: 1,
    // flexDirection: 'column',
    // flexGrow : 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    color: 'black',
    backgroundColor: 'blue',
    fontSize: 35,
  }
});
