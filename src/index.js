/* @flow */
// Dependencies
import 'babel-polyfill';
import 'sanitize.css/sanitize.css';
import React from 'react';
import { render } from 'react-dom';
import invariant from 'invariant';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
// Custom
import App from './containers/App';
import { makeStore } from './reducers';

const ROOT_NODE = document.getElementById('rootNode');
const history = createHistory();

const store = makeStore(history);

invariant(ROOT_NODE, "HTML element dosn't exist");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  ROOT_NODE,
);
