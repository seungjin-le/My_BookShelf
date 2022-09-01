import React, { useCallback } from 'react';
import BookList from '../components/books/bookList';
import { useDispatch, useSelector } from 'react-redux';
import { BookType, RootState } from '../types';
import {
  deleteBook as deleteBookSagaStart,
  getBooks as getBooksSagaStart,
} from '../redux/modules/books';
import { logout as logoutSagaStart } from '../redux/modules/auth';
import { useHistory } from 'react-router';

const ListContainer = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error
  );
  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);
  const goAdd = useCallback(() => {
    history.push('/add');
  }, [history]);
  const deleteBook = useCallback(
    (bookId: number) => {
      dispatch(deleteBookSagaStart(bookId));
    },
    [dispatch]
  );
  const goEdit = useCallback(
    (bookId: number) => {
      history.push(`/edit/:${bookId}`);
    },
    [history]
  );
  return (
    <BookList
      books={books}
      loading={loading}
      getBooks={getBooks}
      error={error}
      logout={logout}
      goAdd={goAdd}
      goEdit={goEdit}
      deleteBook={deleteBook}
    />
  );
};

export default ListContainer;
