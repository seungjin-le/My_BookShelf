import React from 'react';
import Home from './page/home';
import Users from './utils/api/Users';

const App = () => {
  return (
    <div>
      <Home title={'React + TypeScript'} text={'React-Redux test'} >
        {/* Counter */}
        {/*<CounterContainer />*/}
        <hr />
        {/* Todo */}
        {/* <TodoApp /> */}

        {/* Users Api */}
        <Users />
      </Home>
    </div>
  );
};

export default App;
