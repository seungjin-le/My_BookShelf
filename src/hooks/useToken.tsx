import { useSelector } from 'react-redux';
import { RootState } from '../types';

const MyComponent = () => {
  return useSelector<RootState, string | null>((state) => state?.auth?.token);
};

export default MyComponent;
