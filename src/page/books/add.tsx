import React from 'react';
import AddContainer from '../../containers/addContainer';
import { Redirect } from 'react-router';
import useToken from '../../hooks/useToken';

const Add = () => {
  const token = useToken();
  if (!token) {
    return <Redirect to={'/signin'} />;
  }

  return <AddContainer />;
};

export default Add;
