import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/tokens.css';
import './styles/globals.css';

// Gate scroll-reveal hidden states on JS being available: if JS never runs, no
// `.js` class is set and content stays fully visible (progressive enhancement).
document.documentElement.classList.add('js');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
