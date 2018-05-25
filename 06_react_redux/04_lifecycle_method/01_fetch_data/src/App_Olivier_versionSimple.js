import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


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
        <button onClick={this.refreshUrl.bind(this)}>Refresh image</button><br/>   {/*on appelle pas la fonction refreshUrl directement avec ()*/}
        Url : {this.state.url}
        <br/>
        <img src={this.state.url}/>
      </div>
    );
  }
}

export default DogApp;
