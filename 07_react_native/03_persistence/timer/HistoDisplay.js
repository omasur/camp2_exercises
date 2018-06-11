import React from "react";
import { StyleSheet, Text, TouchableHighlight, View , TouchableOpacity, TextInput, Line} from "react-native";
import displayTime from "./displayTime";

export default function(props) {
  //Why pas de table tr th ? Comment faire le tableau ? FlatList



  console.log("props",props);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}> List of counters</Text>
          {props.timers.map((value,id) => {
            return (
              <Text style={styles.list} key={id}>{value.name} : {displayTime(value.timer)} </Text>
            );
          })}
      </View>

      <View style={styles.menuHeader}>
        <TouchableOpacity onPress={props.switchToTimer} style={{flex: 1,height: 50, backgroundColor: 'grey'}}>
          <Text style={styles.menuStyle}>Back to Timer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
  },
  titleScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 45,
  },
  list: {
    color: "white",
    fontSize: 30,
  },
  timer: {
    color: "white",
    fontFamily: "Courier",
    fontSize: 70,
  },
  button: {
    borderColor: "#1a361f",
    borderRadius: 162,
    borderWidth: 3,
    width: 162,
    height: 162,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#1a361f",
    width: 150,
    height: 150,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#4cda64",
    fontSize: 40,
  },
  menuHeader: {
    // flex: 1,
    // flexDirection: 'column',
    // flexGrow : 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'white',
  },
  menuStyle: {
    textAlign: 'center',
    marginTop: 12,
    color: 'white',
  },
});
