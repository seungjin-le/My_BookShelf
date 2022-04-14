import React from 'react';
import Home from './page/home';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';
const App = () => {
  return (
    <div>
      <Home title={'React + TypeScript'} text={'React-Redux test'} />
      <CounterContainer />
      <hr />
      <TodoApp />
    </div>
  );
};

export default App;
