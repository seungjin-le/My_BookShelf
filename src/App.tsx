import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './page/home';
import SignIn from './page/signin';
import Detail from './page/detail';
import Edit from './page/edit';
import Add from './page/add';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/signin'} element={<SignIn />}/>
      <Route path={'/book/:id'} element={<Detail />}/>
      <Route path={'/add'} element={<Add />}/>
      <Route path={'/edit'} element={<Edit />}/>
    </Routes>
  );
};

export default App;
