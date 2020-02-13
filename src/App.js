import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ChooseLanguage from './component/ChooseLanguage';
import Canvas from './component/Canvas';

export const App = () => (
  <Provider store={store}>
    <ChooseLanguage />
    <Canvas />
  </Provider>
);