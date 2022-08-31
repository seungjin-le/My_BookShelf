import { Redirect } from 'react-router';
import ListContainer from '../../containers/listContainer';
import useToken from '../../hooks/useToken';

const Home = () => {
  const token = useToken();
  if (!token) {
    return <Redirect to={'/signin'} />;
  }

  return <ListContainer />;
};

export default Home;
