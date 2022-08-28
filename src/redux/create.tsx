import React from 'react';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';
import history from '../history';

const create = () => {
  const sagaMiddleware = createSagaMiddleware();
  // noinspection JSDeprecatedSymbols
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
