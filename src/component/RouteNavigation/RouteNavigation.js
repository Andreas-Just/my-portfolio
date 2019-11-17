import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeHandler from "../Home/HomeHandler";
import ProjectHandler from "../Project/ProjectHandler";

class RouteNavigation extends Component {

  render() {
    return (
      <Switch>
        {/*<Route exact path='/Home' component={HomeHandler} />*/}
        <Route path='/Project' component={ProjectHandler} />
        <Route />
        <Route />
      </Switch>
    );
  }
}

RouteNavigation.propTypes = {};

export default RouteNavigation;