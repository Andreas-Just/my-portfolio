import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Button } from '../ChooseLanguage/ChooseLanguageStyled';

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Nav = styled.nav `
  width: 100%;
`;
export const NavList = styled.ul `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const NavItem = styled.li `
  
`;
export const StyledLink = styled(NavLink) `
  text-decoration: none;
  color: white;
  background-color: blue;

  &.${(props) => props.activeClassName} {
    background-color: paleturquoise;
  }
`;
StyledLink.defaultProps = {
  activeClassName: 'active',
};
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
