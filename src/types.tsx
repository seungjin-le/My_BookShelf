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

export interface RootState {
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
