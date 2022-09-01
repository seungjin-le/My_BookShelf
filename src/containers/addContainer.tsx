import React, { useCallback } from 'react';
import Add from '../components/add';
import { useDispatch, useSelector } from 'react-redux';
import { BookReqType, RootState } from '../types';
import { goBack } from 'connected-react-router';
import { logout as logoutSagaStart } from '../redux/modules/auth';
import { addBook as addBookSagaStart } from '../redux/modules/books';
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

  const add = useCallback(
    (back: BookReqType) => {
      dispatch(addBookSagaStart(back));
    },
    [dispatch]
  );

  return <Add loading={loading} logout={logout} back={back} add={add} />;
};

export default AddContainer;
