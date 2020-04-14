import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { callReducers } from'./reducers/reducer.js'

/*********************************************************************
 * TODOS for index.js
 * 1) Create store from redux and add reducer
 * 2) Add Provider from react-redux
 * 3) Wrap <App /> with Prover and add the store as context
 * 4) create store for global state objects
 **********************************************************************/
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

//created store for global state objects
const store = createStore(callReducers);

//wrapped <App /> with Provider and fed context of store for global state objects
const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider store ={store}>
      <App />
   </Provider>, 
   rootElement
);


/**********************************************************************
 * Future Plans
 * 1) import reducers after they have been created 
 * 2) use a root reducer if more than one reducer is ultimately built
 ***********************************************************************/
