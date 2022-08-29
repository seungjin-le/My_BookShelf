import React from 'react';
import SignInContainer from '../containers/signInContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../types';

const SignIn = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state?.auth?.token
  );
  return <SignInContainer />;
};

export default SignIn;
