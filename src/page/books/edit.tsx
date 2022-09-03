import React from 'react';
import useToken from '../../hooks/useToken';
import { Redirect } from 'react-router';
import EditContainer from '../../containers/editConteiner';

const Edit = () => {
  const token = useToken();
  if (!token) {
    return <Redirect to={'/signin'} />;
  }

  return <EditContainer />;
};

export default Edit;
