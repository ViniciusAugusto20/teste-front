import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './assets/css/global';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
