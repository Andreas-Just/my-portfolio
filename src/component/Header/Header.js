import React from 'react';
import { connect } from "react-redux";
import { changeFlag, chooseLanguage } from "../../store/actions";

import { Switches } from './Switches';
import {
  WrapperHeader, NavList, NavItem, StyledLink,
  SettingList, SettingItem, ButtonLang
} from './HeaderStyled';

const Header = ({ dataLanguage, chooseLanguage, changeFlag, flag }) => (
  <WrapperHeader flag={flag}>
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
  </WrapperHeader>
);

const mapStateToProps = (state) => ({
  dataLanguage: state.language,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeFlag: () => dispatch(changeFlag()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);