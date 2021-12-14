import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Profile/>
  </BrowserRouter>,
  document.getElementById('root')
);
