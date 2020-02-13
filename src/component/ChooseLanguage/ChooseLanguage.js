import React from 'react';
import { connect } from "react-redux";
import { changeFlag, chooseLanguage } from "../../store/actions";
import Portfolio from '../Portfolio';
import GlobalStyle from '../../theme/globalStyle';
import { Wrapper, WrapperButton, Button } from './ChooseLanguageStyled';

const ChooseLanguage = ({ chooseLanguage, changeFlag, language, flag }) => (
  <>
    <GlobalStyle background={flag} />
    <Wrapper className='Wrapper'>
      {language
        ?
          <Portfolio />
        :
          <WrapperButton onClick={() => changeFlag()}>
            <Button onClick={() => chooseLanguage('eng')}>ENG</Button>
            <Button onClick={() => chooseLanguage('ru')} ru>RU</Button>
          </WrapperButton>
      }
    </Wrapper>
  </>
);

const mapStateToProps = (state) => ({
  language: state.language,
  flag: state.flag,
});

const mapDispatchToProps = (dispatch) => ({
  chooseLanguage: lang => dispatch(chooseLanguage(lang)),
  changeFlag: () => dispatch(changeFlag()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);