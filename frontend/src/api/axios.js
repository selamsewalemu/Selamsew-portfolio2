import axios from 'axios';

const isLocalDev =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

const api = axios.create({
  baseURL: isLocalDev
    ? '/api'
    : 'https://selamsew211-1.onrender.com',
  timeout: 10000,
});

export default api;
