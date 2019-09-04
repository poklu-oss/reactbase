require('offline-plugin/runtime').install();
import './index.html';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);



