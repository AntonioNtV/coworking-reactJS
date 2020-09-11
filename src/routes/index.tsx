import React from 'react';
import { Switch } from 'react-router-dom';
import Signin from '../pages/Signin/index';
import Signup from '../pages/Signup/index';
import Dashboard from '../pages/Dashboard/index';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Signin} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
