import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import './styles/style.css';
import './styles/reset.css';
import iconsArray from './scripts/icons.js';

// manager function here
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
