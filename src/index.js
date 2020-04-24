import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <Route exact path='/' component={App} />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
