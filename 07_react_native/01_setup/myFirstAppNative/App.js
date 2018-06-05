import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Menu from './Menu'
import styles from './css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuText: "Menu 1 text"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{flex:0}}>Header</Text>
          </View>

        <View style={styles.body}>
          <Menu menuText={this.state.menuText} />
        </View>

        <View style={styles.menuHeader}>
          <TouchableOpacity onPress={() => this.setState({menuText: "Menu 1 text"})} style={{flex: 1,height: 50, backgroundColor: 'powderblue'}}>
            <Text style={styles.menuStyle}>Menu 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({menuText: "Menu 2 text"})} style={{flex: 1,height: 50, backgroundColor: 'skyblue'}}>
            <Text style={styles.menuStyle}>Menu 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({menuText: "Menu 3 text"})} style={{flex: 1,height: 50, backgroundColor: 'steelblue'}}>
            <Text style={styles.menuStyle}>Menu 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
