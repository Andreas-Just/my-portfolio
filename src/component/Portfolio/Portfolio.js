import React from 'react';
import { connect } from "react-redux";
import { changeFlag, chooseLanguage } from "../../store/actions";

import { ThemeProvider } from 'styled-components';
import { themeNav, themeMain } from '../../theme/themeVariables';
import RouteNavigation from '../RouteNavigation/RouteNavigation';
import { Switches } from './Switches';
import {
  Header, NavList, NavItem, StyledLink,
  SettingList, SettingItem, ButtonLang, Main
} from './PortfolioStyled';

const Portfolio = ({ dataLanguage, chooseLanguage, changeFlag, flag }) => {
  return (
    <>
      <ThemeProvider theme={themeNav}>
        <Header flag={flag}>
          <NavList>
            {dataLanguage.menuNavigation.map((item, index) =>
              <NavItem key={index} flag={flag}>
                <StyledLink to={item.to} flag={flag.toString()}>
                  {item.name}
                </StyledLink>
              </NavItem>
            )}
          </NavList>
          <SettingList>
            <SettingItem flag={flag.toString()}>
              <Switches
                checked={!flag}
                onChange={() => changeFlag()}
              />
            </SettingItem>
            <SettingItem>
              {dataLanguage.lang === 'eng'
                ? <ButtonLang onClick={() => chooseLanguage('ru')}>ENG</ButtonLang>
                : <ButtonLang onClick={() => chooseLanguage('eng')} ru>RU</ButtonLang>}
            </SettingItem>
          </SettingList>
        </Header>
      </ThemeProvider>
      <ThemeProvider theme={themeMain}>
        <Main flag={flag}>
          <RouteNavigation />
        </Main>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => ({
  dataLanguage: state.language,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeFlag: () => dispatch(changeFlag()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);