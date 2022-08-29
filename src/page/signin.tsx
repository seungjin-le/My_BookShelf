import SignInContainer from '../containers/signInContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state?.auth?.token
  );

  if (!token) {
    return <Link to={'/'} />;
  }
  return <SignInContainer />;
};

export default SignIn;
