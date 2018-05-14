/* @flow */
// Dependencies
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// Custom
import Auth from '../Auth';
import Main from '../Main';

const App = () => (
  <Fragment>
    <Route path="/" component={Main} />
    <Route path="/auth/callback" component={Auth} />
  </Fragment>
);

export default App;
