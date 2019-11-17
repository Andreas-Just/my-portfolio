import React from 'react';

import RouteNavigation from '../RouteNavigation/RouteNavigation';
import { Header, Nav, Link, ButtonLang, Main, Avatar } from './HomeStyled';

const Home = ({ dataLanguage, chooseLanguage }) => {
  return (
    <>
      <Header>
        <Nav>
          {dataLanguage.menuNavigation.map(item =>
            <Link to={item.to}>{item.name}</Link>
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
        <Avatar />
        <h1>{ dataLanguage.name }</h1>
        <RouteNavigation />
      </Main>
    </>
  );
};

export default Home;