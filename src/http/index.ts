import axios from 'axios';
import Cookies from 'js-cookie';

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

export default $api;
