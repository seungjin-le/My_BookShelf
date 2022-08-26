import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './page/home';
import SignIn from './page/signin';
import Detail from './page/detail';
import Edit from './page/edit';
import Add from './page/add';
import NotFound from './page/home/notFound';


const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home title={'Book'}/>}/>
      <Route path={'/signin'} element={<SignIn />}/>
      <Route path={'/edit/:id'} element={<Edit />}/>
      <Route path={'/book/:id'} element={<Detail />}/>
      <Route path={'/add'} element={<Add />}/>

      {/* Not Found */}
      <Route path={'*'} element={<NotFound />}/>
    </Routes>
  );
};

export default App;
