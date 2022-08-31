import React, { useCallback } from 'react';
import BookList from '../components/bookList';
import { useDispatch, useSelector } from 'react-redux';
import { BookType, RootState } from '../types';
import { getBooks as getBooksSagaStart } from '../redux/modules/books';

const ListContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);
  return <BookList books={books} loading={loading} getBooks={getBooks} />;
};

export default ListContainer;
