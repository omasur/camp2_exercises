import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
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


const Article = ({ match }) => (
  <div>
    <h2>Tu as cliqué sur l Article {match.params.id}</h2>
  </div>
)


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li ><NavLink exact to="/" className="Blue" activeClassName="Red">Home</NavLink></li>
        <li><NavLink to="/about" className="Blue" activeClassName="Red">About</NavLink></li>
        <li><NavLink to="/article/42" className="Blue" activeClassName="Red">Article42</NavLink></li>
        <li><NavLink to="/article/1337" className="Blue" activeClassName="Red">Article1337</NavLink></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/article/:id" component={Article}/>
    </div>
  </Router>
)
export default BasicExample
