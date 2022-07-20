import axios from 'axios';
import Cookies from 'js-cookie';

import {AuthResponse} from './typings';

export const API_URL = 'http://localhost:80/api';

const $api = axios.create({
  baseURL: API_URL
});

$api.interceptors.request.use(config => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  config.headers.Authorization = `Bearer ${Cookies.get('token')}`;
  return config;
});

$api.interceptors.response.use(config => {
  return config;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`);
      console.log('response=== ', response);
      console.log('response.data.accessToken=== ', response.data.access_token);
      Cookies.set('token', response.data.access_token);
      return $api.request(originalRequest);
    } catch (e) {
      console.log('НЕ АВТОРИЗОВАН');
    }
  }
  throw error;
});

export default $api;
