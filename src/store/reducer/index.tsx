import { combineReducers } from 'redux';
import counter from '../redux/counter';
import todos from '../redux/Todos';

// Counter, TodoList
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
