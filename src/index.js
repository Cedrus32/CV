import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/MyApp';

import './styles/style.css';
import './styles/reset.css';
import iconsArray from './scripts/icons.js';

// manager function here
console.log('webpack is working!');
ReactDOM.render(<MyApp />, document.getElementById('root'));
