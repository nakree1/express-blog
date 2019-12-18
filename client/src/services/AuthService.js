import api from './api';

export default class ExampleService {
  static login(data) {
    return api.post(`/api/auth/login`, data);
  }

  static signUp(data) {
    return api.post(`/api/auth/signup`, data);
  }
}
