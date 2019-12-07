import React from 'react';
import { Provider } from 'react-redux';

import ChooseLanguageHandler from './component/ChooseLanguage/ChooseLanguageHandler';
import CanvasHandler from './component/Canvas/CanvasHandler';
import store from './store/createStore'

export const App = () => (
  <Provider store={store}>
    <ChooseLanguageHandler />
    <CanvasHandler />
  </Provider>
);