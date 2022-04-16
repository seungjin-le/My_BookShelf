import React from 'react';
import Home from './page/home';
import CounterContainer from './store/redux/counter/CounterContainer';
import TodoApp from './store/redux/todo/TodoApp';
import Users from './utils/api/Users';

const App = () => {
  return (
    <div>
      <Home title={'React + TypeScript'} text={'React-Redux test'} />
      <CounterContainer />
      <hr />
      <TodoApp />
      <Users />
    </div>
  );
};

export default App;
