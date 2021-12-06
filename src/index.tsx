import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './assets/css/global';
import { ToastProvider } from './context/toast';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <GlobalStyle />
        <Routes />
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
