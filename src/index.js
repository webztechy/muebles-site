import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'; // give assess to all site

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore( allReducers );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
