import React, { useMemo } from 'react';
import { connect } from "react-redux";
import { changeSize, chooseLanguage } from "../../store/actions";
import { ThemeProvider } from 'styled-components';
import { themeHome } from '../../theme/themeVariables';
import { Name, Slogan, } from './HomeStyled';
import { AvatarLight, AvatarDark } from './Avatar';

const Home = ({ changeSize, dataLanguage, flag }) => {
  useMemo(
    () => setTimeout(
      () => changeSize(document.documentElement.clientWidth, document.body.scrollHeight),
      50
    ),
    [changeSize]
  );
  return (
    <ThemeProvider theme={themeHome}>
      <Name flag={flag}>{dataLanguage.name} — {dataLanguage.specialty}</Name>
      {flag ? <AvatarLight flag={flag} /> : <AvatarDark flag={flag} />}
      <Slogan flag={flag}>{dataLanguage.slogan}</Slogan>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  dataLanguage: state.language.home,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeSize: (width, height) => dispatch(changeSize(width, height)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
