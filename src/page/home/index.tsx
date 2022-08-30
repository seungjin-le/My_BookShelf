import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';
import { logout } from '../../redux/modules/auth';
import { Redirect } from 'react-router';

type GetProps = {
  // ?가 붙으면 값이 없어도 상관없음
  title?: string;
};

const Home = ({ title }: GetProps) => {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string | null>(
    (state) => state?.auth?.token
  );
  if (!token) {
    return <Redirect to={'/signin'} />;
  }
  const click = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={click}>test</button>
    </div>
  );
};

export default Home;
