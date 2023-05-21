import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './components/App';
import App from './components/AppFunc';

import './styles/reset.css';
import './styles/global.css';
import './styles/forms.css';
import './styles/display.css';

// manager function here
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
