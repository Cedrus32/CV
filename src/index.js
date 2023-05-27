import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import './styles/reset.css';
import './styles/global.css';
import './styles/forms.css';
import './styles/display.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
