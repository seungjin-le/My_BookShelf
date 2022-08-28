import React from 'react';
import { combineReducers } from 'redux';
import auth from './auth';
import { connectRouter } from 'connected-react-router';

const reducer = combineReducers({
  auth,
  router: connectRouter,
});

export default reducer;
