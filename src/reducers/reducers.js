/* @flow */
// Dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Custom
import appReducer from './appReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';
import repositoriesReducer from './repositoriesReducer';

export default combineReducers({
  routerReducer,
  userReducer,
  authReducer,
  appReducer,
  repositoriesReducer,
});
