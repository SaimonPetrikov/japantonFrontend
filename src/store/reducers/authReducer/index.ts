import {AuthActionTypes, AuthActions, AuthState} from '../../action-creators/auth/auth.typings';

const initialState: AuthState = {
  payload: null,
  loading: false,
  isAuth: false,
  isSignup: false
};

const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
  case AuthActionTypes.AUTH:
    return {loading: true, isAuth: false, isSignup: false};
  case AuthActionTypes.AUTH_LOGIN_SUCCESS:
    return {loading: false, payload: action.payload, isAuth: true};
  case AuthActionTypes.AUTH_SIGNUP_SUCCESS:
    return {loading: false, payload: action.payload, isSignup: true};
  case AuthActionTypes.AUTH_ERROR:
    return {loading: false, payload: action.payload, isAuth: false};
  case AuthActionTypes.AUTH_LOGOUT:
    return {payload: action.payload, isAuth: false};
  default:
    return state;
  }
};

export default authReducer;
