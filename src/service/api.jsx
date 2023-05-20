import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://json-server-favoriteflix.vercel.app',
  baseURL: 'http://localhost:3030/',
  headers: { 'Content-Type': 'Application/json' }

});

export default api