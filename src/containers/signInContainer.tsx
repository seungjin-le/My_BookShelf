import React, {useCallback} from 'react';
import SignIn from '../components/signIn';

const SignInContainer = () => {
  const userLogin = useCallback((reqData : object) => {
    console.log(reqData)
  },[])
  return (
<SignIn login={userLogin}/>
  );
};

export default SignInContainer;
