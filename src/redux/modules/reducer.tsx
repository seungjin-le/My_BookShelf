import { combineReducers } from 'redux';
import auth from './auth';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import books from './books';

const reducer = (history: any | History) =>
  combineReducers({
    books,
    auth,
    router: connectRouter(history),
  });
export default reducer;
