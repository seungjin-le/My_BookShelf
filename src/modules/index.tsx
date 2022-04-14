import { combineReducers } from 'redux';
import counter from './counter';
import todos from './Todos';

// Counter, TodoList
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
