import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { getNextState } from './store/reducers';
import ChooseLanguageHandler from './component/ChooseLanguage/ChooseLanguageHandler';
import CanvasHandler from './component/Canvas/CanvasHandler';

const store = createStore(
  getNextState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const App = () => (
  <Provider store={store}>
    <ChooseLanguageHandler />
    <CanvasHandler />
  </Provider>
);