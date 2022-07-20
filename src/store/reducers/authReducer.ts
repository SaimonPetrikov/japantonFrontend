import {AuthActionTypes, AuthActions, AuthState} from '../action-creators/auth/auth.typings';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuth: false
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
  case AuthActionTypes.AUTH_LOGIN:
    return {loading: true, error: null, user: null, isAuth: false};
  case AuthActionTypes.AUTH_SUCCESS:
    return {loading: false, error: null, user: action.payload, isAuth: true};
  case AuthActionTypes.AUTH_ERROR:
    return {loading: false, error: action.payload, user: null, isAuth: false};
  case AuthActionTypes.AUTH_LOGOUT:
    return {loading: false, error: null, user: null, isAuth: false};
  case AuthActionTypes.AUTH_CHECK:
    return {loading: false, error: null, user: null, isAuth: false};
  case AuthActionTypes.AUTH_SIGHUP:
    return {loading: true, error: null, user: null, isAuth: false};
  default:
    return state;
  }
};
