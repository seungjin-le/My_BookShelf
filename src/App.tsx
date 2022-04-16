import React, {createContext} from 'react';
import Home from './page/home';
import Users from './utils/api/Users';
import PostsList from "./components/PostsList";

export const UserApi = createContext('unknown')

const App = () => {
  return (
    <UserApi.Provider value={'반가워요'}>
      <Home title={'React + TypeScript'} text={'React-Redux test'} >
        {/* Counter */}
        {/*<CounterContainer />*/}
        <hr />
        {/* Todo */}
        {/* <TodoApp /> */}

        {/* Users Api */}
        <Users />
        <PostsList />
      </Home>
    </UserApi.Provider>
  );
};

export default App;
