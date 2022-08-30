import { combineReducers } from 'redux';
import auth from './auth';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

const reducer = (history: any | History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });
export default reducer;
