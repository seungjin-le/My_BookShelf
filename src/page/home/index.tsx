import { useSelector } from 'react-redux';
import { RootState } from '../../types';

import { Redirect } from 'react-router';
import ListContainer from '../../containers/listContainer';

const Home = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state?.auth?.token
  );
  if (!token) {
    return <Redirect to={'/signin'} />;
  }

  return <ListContainer />;
};

export default Home;
