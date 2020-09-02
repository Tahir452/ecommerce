import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import allreduers from "./reducers";
import {Provider} from "react-redux";

import 'semantic-ui-css/semantic.min.css'
import createSagaMiddleware from "redux-saga";
import root from "./saga";
const sagaMiddleware=createSagaMiddleware();
const store=createStore(allreduers,applyMiddleware(sagaMiddleware));// applying saga middleware to the application
sagaMiddleware.run(root);
ReactDOM.render(
  <Provider store={store}>

<App />

  </Provider>,

  
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

