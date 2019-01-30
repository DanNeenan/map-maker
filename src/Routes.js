import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Ocean from './containers/Ocean'

export default () =>
  <Switch>
    <Route path="/" exact component={Ocean} />
  </Switch>;
