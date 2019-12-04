import React from 'react';
import { ThemeProvider } from 'styled-components';

import { themeNav, themeMain } from '../../theme/themeVariables';
import RouteNavigation from '../RouteNavigation/RouteNavigation';
import { Switches } from './Switches';
import { Header, NavList, NavItem, StyledLink, SettingList, SettingItem, ButtonLang, Main } from './PortfolioStyled';

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
                ? <ButtonLang onClick={() => chooseLanguage('ru')}>RU</ButtonLang>
                : <ButtonLang onClick={() => chooseLanguage('eng')}>ENG</ButtonLang>}
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

export default Portfolio;