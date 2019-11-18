import React from 'react';

import RouteNavigation from '../RouteNavigation/RouteNavigation';
import { Header, Nav, Link, ButtonLang, Main } from './PortfolioStyled';

const Portfolio = ({ dataLanguage, chooseLanguage }) => {
  return (
    <>
      <Header>
        <Nav>
          {dataLanguage.menuNavigation.map((item, index) =>
            <Link key={index} to={item.to}>{item.name}</Link>
          )}
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