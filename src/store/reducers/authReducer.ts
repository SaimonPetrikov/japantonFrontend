import {AuthActionTypes, AuthActions, AuthState} from '../action-creators/auth/auth.typings';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuth: false,
  isSignup: false,
  message: ''
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
  case AuthActionTypes.AUTH_LOGIN:
    return {loading: true};
  case AuthActionTypes.AUTH_SUCCESS:
    return {loading: false, user: action.payload, isAuth: true};
  case AuthActionTypes.AUTH_ERROR:
    return {loading: false, error: action.payload};
  case AuthActionTypes.AUTH_LOGOUT:
    return {isAuth: false};
  case AuthActionTypes.AUTH_SIGHUP:
    return {loading: true, isAuth: false, isSignup: false};
  case AuthActionTypes.AUTH_SIGHUP_SUCCESS:
    return {loading: false, isAuth: false, isSignup: true};
  default:
    return state;
  }
};
