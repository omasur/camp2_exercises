import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="cardCoteACote">
        <div class="card" style={{"width": "18rem"}}>
          <img class="card-img-top" src="https://picsum.photos/296/180/?random" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk  content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="container" style={{"width": "18rem"}}>
          <img class="picture" src="https://picsum.photos/296/180/?random" alt="Card image cap"/>
          <div class="textBloc">
            <h5 class="title">Card title</h5>
            <p class="text">Some quick example text to build on the card title and make up the bulk  content.</p>
            <a href="#" class="button">Go somewhere</a>
          </div>
        </div>

        <div class="vide" style={{"width": "18rem"}}>
          <img class="vide" src="https://picsum.photos/286/180/?random" alt="Card image cap"/>
          <div class="vide">
            <h5 class="vide">Card title</h5>
            <p class="vide">Some quick example text to build on the card title and make up the bulk  content.</p>
            <a href="#" class="vide">Go somewhere</a>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
