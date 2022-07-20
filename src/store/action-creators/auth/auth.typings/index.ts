import {AuthResponse} from '../../../../http/typings';

export interface AuthState {
  user: AuthResponse | null;
  loading: boolean;
  error: null | string;
  isAuth: boolean;
}

export interface loginData {
  email: string;
  password: string;
}

export interface signupData {
  name: string;
  email: string;
  password: string;
}

export enum AuthActionTypes {
  // eslint-disable-next-line no-unused-vars
  AUTH_LOGIN = 'AUTH_LOGIN',
  // eslint-disable-next-line no-unused-vars
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  // eslint-disable-next-line no-unused-vars
  AUTH_ERROR = 'AUTH_ERROR',
  // eslint-disable-next-line no-unused-vars
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  // eslint-disable-next-line no-unused-vars
  AUTH_CHECK = 'AUTH_CHECK',
  // eslint-disable-next-line no-unused-vars
  AUTH_SIGHUP = 'AUTH_SIGHUP'
}

interface AuthLoginAction {
  type: AuthActionTypes.AUTH_LOGIN;
}

interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: AuthResponse
}

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}

interface AuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT;
}

interface AuthCheckAction {
  type: AuthActionTypes.AUTH_CHECK;
}

interface AuthSignupAction {
  type: AuthActionTypes.AUTH_SIGHUP;
}

// eslint-disable-next-line max-len
export type AuthActions = AuthLoginAction | AuthSuccessAction | AuthErrorAction | AuthLogoutAction | AuthCheckAction | AuthSignupAction
