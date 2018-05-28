import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function Button(props) {
  return <button onClick={props.action}>Refresh image</button>
}


function fetchDog() {
  return fetch ('https://random.dog/woof.json')
  .then(data => data.json())
}



class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {url: null}
  }

  refreshUrl() {
    fetchDog()
    .then(data => this.setState({url: data.url}))
  }

  componentDidMount() {
    fetchDog()
    .then(data => this.setState({url: data.url}))
  }

  render() {
    return (
      <div className="App">
        <Button action={this.refreshUrl.bind(this)}/>
        <br/>
        Url : {this.state.url}
        <br/>
        <img src={this.state.url}/>
      </div>
    );
  }
}

export default DogApp;
