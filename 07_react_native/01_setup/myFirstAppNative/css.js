// import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  menuStyle: {
    textAlign: 'center',
    marginTop: 12},
});
