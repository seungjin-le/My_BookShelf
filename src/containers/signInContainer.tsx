import React, { useCallback } from 'react';
import SignIn from '../components/signIn';
import { useDispatch } from 'react-redux';
import { login as loginSagaStart } from '../redux/modules/auth';

const SignInContainer = () => {
  const dispatch = useDispatch();
  const userLogin = useCallback(
    (reqData: object) => {
      console.log(reqData);
      dispatch(loginSagaStart(reqData));
    },
    [dispatch]
  );
  return <SignIn login={userLogin} />;
};

export default SignInContainer;
