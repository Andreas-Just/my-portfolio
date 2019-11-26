import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { getNextState } from './store/reducers';
import ChooseLanguage from './component/ChooseLanguage/ChooseLanguageHandler';
import Canvas from './component/Canvas/CanvasHandler';

const store = createStore(getNextState);

export const App = () => (
  <Provider store={store}>
    <ChooseLanguage />
    <Canvas />
  </Provider>
);