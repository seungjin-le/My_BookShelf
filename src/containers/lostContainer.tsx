import React, { useCallback } from 'react';
import BookList from '../components/bookList';
import { useDispatch, useSelector } from 'react-redux';
import { BookType, RootState } from '../types';

const ListContainer = () => {
  const dispatch = useDispatch;
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const getBooks = useCallback(() => {
    dispatch();
  }, [dispatch]);
  return <BookList books={books} loading={loading} getBooks={getBooks} />;
};

export default ListContainer;
