import React from 'react';

import GlobalStyle from '../../theme/globalStyle';
import { Wrapper, WrapperButton, Button } from './ChooseLanguageStyled';
import PortfolioHandler from '../Portfolio/PortfolioHandler';

const ChooseLanguage = ({ chooseLanguage, changeFlag, language, flag }) => (
  <>
    <GlobalStyle background={flag} />
    <Wrapper className='Wrapper'>
      {language
        ?
          <PortfolioHandler />
        :
          <WrapperButton onClick={() => changeFlag()}>
            <Button onClick={() => chooseLanguage('eng')}>ENG</Button>
            <Button onClick={() => chooseLanguage('ru')} ru>RU</Button>
          </WrapperButton>
      }
    </Wrapper>
  </>
);

export default ChooseLanguage;