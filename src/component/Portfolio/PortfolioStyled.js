import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../ChooseLanguage/ChooseStyled';

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Nav = styled.nav `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const Link = styled(NavLink) `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const ButtonLang = styled(Button) `
  width: 120px;
  margin: 1vh;
  padding: 12px;
  font-size: 16px;
  
  ::before {
    top: 20%;
    left: 5%;
    width: 30px;
    height: 30px;
    background-size: 80%;
  }
`;
export const Main = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
