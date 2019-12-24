import axios from 'axios';

const api = axios.create({
  baseURL: '/api/'
});

api.interceptors.response.use((res) => res.data);

export function setAuthHeader(token) {
  api.defaults.headers.authorization = `Bearer ${token}`;
}

export function setAccessToken(token) {
  localStorage.setItem('access_token', token);
}

export function getAccessToken() {
  return localStorage.getItem('access_token');
}

export function removeTokens() {
  setAuthHeader(null);
  localStorage.removeItem('access_token');
}

export default api;
