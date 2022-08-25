import React, {createContext} from 'react';
import Home from './page/home';

export const UserApi = createContext('unknown')

const App = () => {
  return (
    <UserApi.Provider value={'반가워요'}>
      asd
      <Home title={'React + TypeScript'} />
    </UserApi.Provider>
  );
};

export default App;
