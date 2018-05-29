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

function SomeComponent(props) {
  return (
    <div>
      {Object.keys(props).map(prop =>
        <div>{prop}</div>
      )}
    </div>
  );
}

function App2(props) {
  const someObject = {
    oneKey: 1,
    twoKey: 2,
    threeKey: 3
  };
  return (
    <div>
      <SomeComponent {...someObject} />
    </div>
  );
}


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
    <h2>Tu as cliqué sur l Article {match.params.articleId}</h2>
    <h3> {App2(match.params.articleId)}</h3>
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
        <li><NavLink to="/article/:articleId" className="Blue" activeClassName="Red">Article</NavLink></li>
      </ul>

      <hr/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/article/:articleId" component={Article}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)
export default BasicExample
