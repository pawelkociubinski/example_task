/* @flow */
// Dependencies
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Custom
import rootSaga from '../sagas';
import reducers from './reducers';
import { loadState } from 'helpers/localStorage';

import type { BrowserHistory } from 'history';

export const makeStore = (history: BrowserHistory) => {
  const initialState = loadState();
  const saga = createSagaMiddleware();
  const router = routerMiddleware(history);

  const enhancers = [applyMiddleware(router, saga)];

  const composeEnhancers =
    process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
  );

  saga.run(rootSaga);

  return store;
};
