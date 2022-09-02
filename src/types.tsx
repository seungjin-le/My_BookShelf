import { AnyAction, Reducer } from 'redux';
import { RouterState } from 'connected-react-router';

export type loginData = {
  email: string;
  password: string;
};

export interface SigInProps {
  login: (reqData: loginData) => void;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}
export interface BooksState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}
export interface RootState {
  auth: AuthState;
  books: BooksState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
export interface BookType {
  bookId: number;
  title: string;
  author: string;
  createAt: string;
  url: string;
  message: string;
}
export interface BookReqType {
  title: string;
  message: string;
  author: string;
  url: string;
}
export type idParams = {
  id: string;
};
