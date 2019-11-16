import React, {Component} from 'react';

import MyPortfolioHandler from '../MyPortfolio/MyPortfolioHandler';
import GlobalStyle from "../../theme/globalStyle";
import { Wrapper, Button } from './ChooseStyled';
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
              <MyPortfolioHandler />
            :
              <>
                <Button onClick={() => chooseLanguage('eng')}>
                  ENG
                </Button>
                <Button onClick={() => chooseLanguage('ru')}>
                  RU
                </Button>
                <button
                  onClick={() => changeButton(button.color)}
                  className={button.color}
                >
                  {button.text}
                </button>
              </>
          }
        </Wrapper>
      </>
    );
  }
}

ChooseLanguage.propTypes = {};

export default ChooseLanguage;