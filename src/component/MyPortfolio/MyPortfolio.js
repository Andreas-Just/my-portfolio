import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RouteNavigation from '../RouteNavigation/RouteNavigation';

class MyPortfolio extends Component {

  render() {
    const { dataLanguage, chooseLanguage } = this.props;

    return (
      <>
        <header>
          <img src="" alt="Photo"/>
          <h1>{ dataLanguage.name }</h1>
          <nav>
            <ul>
            {
              dataLanguage.menuNavigation.map(item =>
                (
                  <li key={item.to}>
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                )
              )
            }
            </ul>
          </nav>
          <div>
            {dataLanguage.lang === 'eng'
              ? <button onClick={() => chooseLanguage('ru')}>RU</button>
              : <button onClick={() => chooseLanguage('eng')}>ENG</button>
            }
          </div>
        </header>
        <main>
          <RouteNavigation />
        </main>
      </>
    );
  }
}

MyPortfolio.propTypes = {};

export default MyPortfolio;