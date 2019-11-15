import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeHandler from "../Home/HomeHandler";
import ProjectHandler from "../Project/ProjectHandler";

class RouteNavigation extends Component {

  render() {
    return (
      <Switch>
        <Route exact component={HomeHandler} path='/Home' />
        <Route component={ProjectHandler} path='/Project' />
        <Route />
        <Route />
      </Switch>
    );
  }
}

RouteNavigation.propTypes = {};

export default RouteNavigation;