import React, {Component} from 'react';

import GlobalStyle from "../../theme/globalStyle";
import { Wrapper, WrapperButton, Button } from './ChooseStyled';
import Home from "../Home/HomeHandler";
import './ChooseLanguage.css';

class ChooseLanguage extends Component {

  render() {
    const { chooseLanguage, changeButton, language, button } = this.props;

    return (
      <>
        <GlobalStyle background={language} />
        <Wrapper className='Wrapper'>
          { language
            ?
              <Home />
            :
              <WrapperButton>
                <Button onClick={() => chooseLanguage('eng')}>ENG</Button>
                <Button onClick={() => chooseLanguage('ru')} ru>RU</Button>
               {/* <button
                  onClick={() => changeButton(button.color)}
                  className={button.color}
                >
                  {button.text}
                </button>*/}
              </WrapperButton>
          }
        </Wrapper>
      </>
    );
  }
}

ChooseLanguage.propTypes = {};

export default ChooseLanguage;