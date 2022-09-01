import React, { useCallback } from 'react';
import Edit from '../components/books/edit';
import { useDispatch, useSelector } from 'react-redux';
import { BookReqType, BookType, RootState } from '../types';
import { logout as logoutSagaStart } from '../redux/modules/auth';
import { goBack } from 'connected-react-router';
import { editGetBooksSaga as editGetBookSagaStart } from '../redux/modules/books';
import { useParams } from 'react-router';

const EditContainer = () => {
  const dispatch = useDispatch();
  const bookId = useParams();
  console.log();
  const book = useCallback(() => {
    dispatch(editGetBookSagaStart(6769));
  }, [dispatch]);
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  const edit = useCallback(
    (book: BookReqType) => {
      //dispatch(editBookSaga(bookId));
    },
    [dispatch]
  );
  return <Edit loading={loading} logout={logout} back={back} edit={edit} />;
};

export default EditContainer;
