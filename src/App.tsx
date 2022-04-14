import React from 'react';
import Home from './page/home';
import CounterContainer from './containers/CounterContainer';
const App = () => {
  return (
    <div>
      <Home title={'React + TypeScript'} text={'React-Redux test'} />
      <CounterContainer />
    </div>
  );
};

export default App;
