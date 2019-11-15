import React, {Component} from 'react';
import MyPortfolioHandler from '../MyPortfolio/MyPortfolioHandler';

class ChooseLanguage extends Component {

  render() {
    const { chooseLanguage, language } = this.props;
    return (
      <div>
        { language
          ?
            <MyPortfolioHandler />
          :
            <div>
              <button onClick={() => chooseLanguage('eng')}>ENG</button>
              <button onClick={() => chooseLanguage('ru')}>RU</button>
            </div>
        }
      </div>
    );
  }
}

ChooseLanguage.propTypes = {};

export default ChooseLanguage;