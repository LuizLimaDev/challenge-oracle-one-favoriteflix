import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-favoriteflix.vercel.app',
  timeout: 5000,
  headers: { 'Content-Type': 'Application/json' }
});

export default api