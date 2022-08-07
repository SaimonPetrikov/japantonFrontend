import $api from '../../http';
import {AuthResponse} from '../../store/slices/Auth/authActionCreators/auth.typings';

const AuthService = {
  signup: data => $api.post<AuthResponse>('/auth/signup', data),
  login: data => $api.post<AuthResponse>('/auth/login', data),
  logout: () => $api.get<AuthResponse>('/auth/logout'),
  refresh: () => $api.get<AuthResponse>('/auth/refresh'),
};

export default AuthService;
