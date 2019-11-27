import React, {Component} from 'react';

import GlobalStyle from "../../theme/globalStyle";
import { Wrapper, WrapperButton, Button } from './ChooseLanguageStyled';
import Portfolio from "../Portfolio/PortfolioHandler";

class ChooseLanguage extends Component {

  render() {
    const { chooseLanguage, changeFlag, language, flag } = this.props;

    return (
      <>
        <GlobalStyle background={flag} />
        <Wrapper className='Wrapper'>
          { language
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
  }
}

ChooseLanguage.propTypes = {};

export default ChooseLanguage;