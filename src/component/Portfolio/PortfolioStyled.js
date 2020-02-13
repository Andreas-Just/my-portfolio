import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../ChooseLanguage/ChooseLanguageStyled';

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.bgNav};
  box-shadow: 0 0 20px 3px ${props => props.theme.shadowHeader};
`;
export const NavList = styled.ul `
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;
export const NavItem = styled.li `
  font-size: 1.3vw;
  font-weight: bold;
  text-transform: uppercase;
`;
export const StyledLink = styled(NavLink) `
  display: block;
  padding: 25px;
  text-decoration: none;
  color: ${props => props.theme.colorNav};
  
  &:hover {
    box-shadow: 0 0 10px 1px ${props => props.theme.shadowItem};
  }

  &.${(props) => props.activeClassName} {
    color: ${props => props.theme.colorActive};
    background-color: ${props => props.theme.bgActive};
  }
`;
StyledLink.defaultProps = {
  activeClassName: 'active',
};
export const SettingList = styled(NavList) `
  flex-grow: 0;
  margin: 0 3vw;
`;
export const SettingItem = styled.li `
  color: ${props => props.theme.colorNav};
  &:last-child {
    margin-left: 5vw;
  }
`;
export const ButtonLang = styled(Button) `
  width: 120px;
  margin: 0;
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
  justify-content: space-around;
  align-items: center;
  margin: 3vw;
  color: ${props => props.theme.colorMain};
`;
