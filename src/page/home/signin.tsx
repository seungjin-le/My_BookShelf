import SignInContainer from '../../containers/signInContainer';
import { Redirect } from 'react-router';
import useToken from '../../hooks/useToken';

const SignIn = () => {
  const token = useToken();

  if (token) {
    return <Redirect to={'/'} />;
  }
  return <SignInContainer />;
};

export default SignIn;
