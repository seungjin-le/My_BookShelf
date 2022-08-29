import { call, put, takeEvery } from 'redux-saga/effects';
import { Action, createActions, handleActions } from 'redux-actions';
import UserSerVice from '../../service/userService';
import TokenService from '../../service/tokenService';
import { push } from 'connected-react-router';
import { AuthState, loginData } from '../../types';

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = 'my-books/auth';

export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  'FAIL',
  {
    prefix,
  }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// saga

export const { login, logout } = createActions('LOGIN', 'LOGOUT', { prefix });

function* loginSaga(action: Action<loginData>) {
  try {
    yield put(pending());
    const token: string = yield call(UserSerVice.login, action.payload);
    TokenService.set(token);
    yield put(success(token));
    yield put(push('/'));

    // push
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
  }
}
function* logoutSaga() {}
export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
