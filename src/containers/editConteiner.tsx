import React, { useCallback } from 'react';
import Edit from '../components/books/edit';
import { useDispatch, useSelector } from 'react-redux';
import { BookReqType, BookType, idParams, RootState } from '../types';
import { logout as logoutSagaStart } from '../redux/modules/auth';
import { goBack } from 'connected-react-router';
import { useParams } from 'react-router';
import {
  getBooks as getBooksSagaStart,
  editBook as editBookSageStart,
} from '../redux/modules/books';

const EditContainer = () => {
  const dispatch = useDispatch();
  const bookId: idParams = useParams();
  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);

  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const book = books?.filter((book) => book.bookId === Number(bookId.id))![0];

  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  const edit = useCallback(
    (book: BookReqType) => {
      dispatch(editBookSageStart(book));
    },
    [dispatch]
  );
  return (
    <Edit
      loading={loading}
      logout={logout}
      back={back}
      edit={edit}
      book={book}
      getBooks={getBooks}
    />
  );
};

export default EditContainer;
