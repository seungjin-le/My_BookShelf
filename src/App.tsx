import React from 'react';
import Home from './page/home';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import ReducerSample from './reducer/ReducerSample';
import { SampleProvider } from './reducer/SampleContext';
const App = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
      {/*
      <Home title={'base'} text={'test'} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
      */}
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
};

export default App;
