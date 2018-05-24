import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './App';
// import Array from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
registerServiceWorker();
// ReactDOM.render(<Array />, document.getElementById('root'));
// registerServiceWorker();
