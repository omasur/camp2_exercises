import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'



const Home = () => (
  <div>
      <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)


const User = ({ match }) => (
  <div>
    <h2>Tu as cliqué sur l Article {match.params.user}</h2>
  </div>
)

const NoMatch = ({ match }) => (
  <div>
    <h2>No match !!!!</h2>
  </div>
)


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li ><NavLink exact to="/" className="Blue" activeClassName="Red">Home</NavLink></li>
        <li><NavLink to="/about" className="Blue" activeClassName="Red">About</NavLink></li>
        <li><NavLink to="/:user" className="Blue" activeClassName="Red">Article42</NavLink></li>
      </ul>

      <hr/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/:user" component={User}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)
export default BasicExample
