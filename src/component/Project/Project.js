import React, { useMemo } from 'react';
import { connect } from "react-redux";
import { changeSize, chooseLanguage } from "../../store/actions";
import { ThemeProvider } from "styled-components";
import { themeNav } from "../../theme/themeVariables";
import {ProjectContent, SideBar, WrapperProject} from "./ProjectStyled";

const Project = ({ changeSize, flag }) => {
  useMemo(
    () => setTimeout(
      () => changeSize(document.documentElement.clientWidth, document.body.scrollHeight),
      50
    ),
    [changeSize]
  );
  return (
    <ThemeProvider theme={themeNav}>
      <WrapperProject>
        <SideBar flag={flag} />
        <ProjectContent>

        </ProjectContent>
      </WrapperProject>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeSize: (width, height) => dispatch(changeSize(width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);