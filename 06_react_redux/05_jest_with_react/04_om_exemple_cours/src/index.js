import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Link from './Link';
import registerServiceWorker from './registerServiceWorker';


// Pour test Link avec texte qui change de couleur et de taille
ReactDOM.render(<Link page="http://www.facebook.com">toto</Link>, document.getElementById('root'));
registerServiceWorker();
