import {Dispatch} from 'redux';
import Cookies from 'js-cookie';

import AuthService from '../../../services/AuthService';

import {AuthActions, AuthActionTypes, AuthData} from './auth.typings';

export const authLogin = (login: AuthData) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      dispatch({type: AuthActionTypes.AUTH});
      const response = await AuthService.login(login);
      dispatch({type: AuthActionTypes.AUTH_LOGIN_SUCCESS, payload: response.data});
      Cookies.set('token', response.data.access_token);
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Ошибка при авторизации'
      });
    }
  };
};

export const authLogout = () => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      const response = await AuthService.logout();
      Cookies.remove('token');
      dispatch({type: AuthActionTypes.AUTH_LOGOUT, payload: response.data});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Ошибка при выходе'
      });
    }
  };
};

export const authCheck = () => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      const response = await AuthService.refresh();
      Cookies.set('token', response.data.access_token);
      dispatch({type: AuthActionTypes.AUTH_LOGIN_SUCCESS, payload: response.data});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Ошибка при проверке авторизации'
      });
      console.log('Вы НЕ авторизованы!');
    }
  };
};

export const authRegistration = (signup: AuthData) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      dispatch({type: AuthActionTypes.AUTH});
      const response = await AuthService.signup(signup);
      dispatch({type: AuthActionTypes.AUTH_SIGNUP_SUCCESS, payload: response.data});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Ошибка при регистрации'
      });
    }
  };
};
