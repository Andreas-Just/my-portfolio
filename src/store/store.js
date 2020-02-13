import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getNextState } from './reducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const middlewares = [thunk];
const configureStore = () => (
  createStore(
    getNextState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
);

const store = configureStore();

export default store;