import React, {createContext} from 'react';
import Home from './page/home';
import UsersApi from './utils/api/UsersApi';
import PostsList from "./components/users/PostsList";

export const UserApi = createContext('unknown')

const App = () => {
  return (
    <UserApi.Provider value={'반가워요'}>
      <Home title={'React + TypeScript'} text={'React-Redux test'} />
    </UserApi.Provider>
  );
};

export default App;
