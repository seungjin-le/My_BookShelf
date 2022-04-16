import { combineReducers } from 'redux';
import counter from '../redux/counter/counter';
import todos from '../redux/todo/Todos';

// Counter, TodoList
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
