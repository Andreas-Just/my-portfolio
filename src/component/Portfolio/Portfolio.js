import React from 'react';
import { ThemeProvider } from 'styled-components';

import { themeNav, themeMain } from '../../theme/themeVariables';
import RouteNavigation from '../RouteNavigation/RouteNavigation';
import { Header, Nav, NavList, NavItem, StyledLink, ButtonLang, Main } from './PortfolioStyled';

const Portfolio = ({ dataLanguage, chooseLanguage, changeFlag, flag }) => {
  return (
    <>
      <ThemeProvider theme={themeNav}>
        <Header flag={flag}>
          <Nav>
            <NavList>
              {dataLanguage.menuNavigation.map((item, index) =>
                <NavItem key={index} onClick={() => changeFlag()} flag={flag}>
                  <StyledLink to={item.to} flag={flag.toString()}>
                    {item.name}
                  </StyledLink>
                </NavItem>
              )}
            </NavList>
          </Nav>
          <>
            {dataLanguage.lang === 'eng'
              ? <ButtonLang onClick={() => chooseLanguage('ru')}>RU</ButtonLang>
              : <ButtonLang onClick={() => chooseLanguage('eng')}>ENG</ButtonLang>
            }
          </>
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