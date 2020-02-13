import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Project from '../Project';

const RouteNavigation = () => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/project' component={Project} />
    <Route />
    <Route />
  </Switch>
);

RouteNavigation.propTypes = {};

export default RouteNavigation;