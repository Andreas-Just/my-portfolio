import React from 'react';
import { connect } from "react-redux";

import RouteNavigation from '../RouteNavigation/RouteNavigation';
import { WrapperMain } from './MainStyled';

const Main = ({ flag }) => (
  <WrapperMain flag={flag}>
    <RouteNavigation />
  </WrapperMain>
);

const mapStateToProps = (state) => ({
  flag: state.flag,
});

export default connect(mapStateToProps, {})(Main);