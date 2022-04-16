import React from 'react';
import Home from './page/home';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';
import Users from './api/Users';

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
