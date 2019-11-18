import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeHandler from "../Home/HomeHandler";
import ProjectHandler from "../Project/ProjectHandler";

class RouteNavigation extends Component {

  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path='/home' component={HomeHandler} />
        <Route path='/project' component={ProjectHandler} />
        <Route />
        <Route />
      </Switch>
    );
  }
}

RouteNavigation.propTypes = {};

export default RouteNavigation;