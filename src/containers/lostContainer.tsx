import React from 'react';
import BookList from '../components/bookList';
import { useSelector } from 'react-redux';
import { BookType, RootState } from '../types';

const ListContainer = () => {
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  return <BookList books={books} loading={loading} />;
};

export default ListContainer;
