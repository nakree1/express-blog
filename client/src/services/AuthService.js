import api from './api';

export default class AuthService {
  static login(data) {
    return api.post(`/auth/login`, data);
  }

  static signUp(data) {
    return api.post(`/auth/signup`, data);
  }
}
