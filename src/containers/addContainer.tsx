import React, { useCallback } from 'react';
import Add from '../components/add';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { goBack } from 'connected-react-router';
import { logout as logoutSagaStart } from '../redux/modules/auth';

const AddContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);
  return <Add loading={loading} logout={logout} back={back} />;
};

export default AddContainer;
