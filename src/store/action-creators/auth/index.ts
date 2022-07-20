import {Dispatch} from 'redux';
import Cookies from 'js-cookie';
import axios from 'axios';

import $api from '../../../http';
import {AuthResponse, AuthSignupResponse} from '../../../http/typings';

import {AuthActions, AuthActionTypes, loginData, signupData} from './auth.typings';

export const authLogin = (login:loginData) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      dispatch({type: AuthActionTypes.AUTH_LOGIN});
      const response = await $api.post('/auth/login', login);
      dispatch({type: AuthActionTypes.AUTH_SUCCESS, payload: response.data});
      Cookies.set('token', response.data.access_token);
      console.log('Авторизация выполнена');
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
      dispatch({type: AuthActionTypes.AUTH_LOGOUT});
      Cookies.remove('token');
      const response = await $api.get('/auth/logout');
      dispatch({type: AuthActionTypes.AUTH_SUCCESS, payload: response.data});
      console.log('Вы ВЫШЛИ!');
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Ошибка при авторизации'
      });
    }
  };
};

export const authCheck = () => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      console.log('Проверяем авторизацию...');
      const response = await $api.get<AuthResponse>('/auth/refresh');
      console.log(response);
      Cookies.set('token', response.data.access_token);
      dispatch({type: AuthActionTypes.AUTH_SUCCESS, payload: response.data});
      console.log('Вы авторизованы!');
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Ошибка при проверке авторизации'
      });
      console.log('Вы НЕ авторизованы!');
    }
  };
};

export const authRegistration = (signup: signupData) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    try {
      dispatch({type: AuthActionTypes.AUTH_SIGHUP});
      const response = await axios.post<AuthSignupResponse>('http://localhost:80/api/auth/signup', signup);
      dispatch({type: AuthActionTypes.AUTH_SIGHUP_SUCCESS, payload: response.data});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: 'Ошибка при регистрации'
      });
    }
  };
};
