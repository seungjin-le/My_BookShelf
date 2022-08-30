import SignInContainer from '../containers/signInContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { Redirect } from 'react-router';

const SignIn = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state?.auth?.token
  );

  if (token) {
    return <Redirect to={'/'} />;
  }
  return <SignInContainer />;
};

export default SignIn;
