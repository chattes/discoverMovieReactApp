import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware( ...middleware )
)
ReactDOM.render(
  <Provider store = { store }>
  <App />
  </Provider>,
  document.getElementById('root')
);
