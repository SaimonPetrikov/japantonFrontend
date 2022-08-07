export interface IUserProps {
  id: number,
  name: string,
  email: string,
  email_verified_at?: null,
  created_at: string,
  updated_at: string
}

export interface AuthResponse {
  access_token: string,
  token_type: string,
  expires_in: number,
  user: IUserProps,
  message?: string
}

export interface AuthState {
  payload?: AuthResponse | string | null;
  loading?: boolean;
  isAuth?: boolean;
  isSignup?: boolean;
}

export interface AuthData {
  name?: string;
  email: string;
  password: string;
}

export enum AuthActionTypes {
  // eslint-disable-next-line no-unused-vars
  AUTH = 'AUTH',
  // eslint-disable-next-line no-unused-vars
  AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
  // eslint-disable-next-line no-unused-vars
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  // eslint-disable-next-line no-unused-vars
  AUTH_ERROR = 'AUTH_ERROR',
  // eslint-disable-next-line no-unused-vars
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  // eslint-disable-next-line no-unused-vars
  AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
}

interface AuthAction {
  type: AuthActionTypes.AUTH;
}

interface AuthLoginAction {
  type: AuthActionTypes.AUTH_LOGIN_SUCCESS;
  payload: AuthResponse;
}

interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
}

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}

interface AuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT;
  payload: AuthResponse;
}

interface AuthSignupAction {
  type: AuthActionTypes.AUTH_SIGNUP_SUCCESS;
  payload: AuthResponse;
}

// eslint-disable-next-line max-len
export type AuthActions = AuthAction | AuthLoginAction | AuthSuccessAction | AuthErrorAction | AuthLogoutAction | AuthSignupAction
