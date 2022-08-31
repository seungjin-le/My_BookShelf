import React, { useCallback } from 'react';
import BookList from '../components/bookList';
import { useDispatch, useSelector } from 'react-redux';
import { BookType, RootState } from '../types';
import { getBooks as getBooksSagaStart } from '../redux/modules/books';
import { logout as logoutSagaStart } from '../redux/modules/auth';
const ListContainer = () => {
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
  return (
    <BookList
      books={books}
      loading={loading}
      getBooks={getBooks}
      error={error}
      logout={logout}
    />
  );
};

export default ListContainer;
