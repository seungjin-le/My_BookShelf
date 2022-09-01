import React, { useCallback } from 'react';
import Edit from '../components/books/edit';
import { useDispatch, useSelector } from 'react-redux';
import { BookReqType, RootState } from '../types';
import { logout as logoutSagaStart } from '../redux/modules/auth';
import { goBack } from 'connected-react-router';
import { addBook as addBookSagaStart } from '../redux/modules/books';

const EditContainer = () => {
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
  return <Edit loading={loading} logout={logout} back={back} add={add} />;
};

export default EditContainer;
