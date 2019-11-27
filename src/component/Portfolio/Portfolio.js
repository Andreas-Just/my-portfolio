import React from 'react';

import RouteNavigation from '../RouteNavigation/RouteNavigation';
import { Header, Nav, NavList, NavItem, StyledLink, ButtonLang, Main } from './PortfolioStyled';

const Portfolio = ({ dataLanguage, chooseLanguage, changeFlag }) => {
  return (
    <>
      <Header>
        <Nav>
          <NavList>
            {dataLanguage.menuNavigation.map((item, index) =>
              <NavItem key={index} onClick={() => changeFlag()}>
                <StyledLink to={item.to}>
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
      <Main>
        <RouteNavigation />
      </Main>
    </>
  );
};

export default Portfolio;