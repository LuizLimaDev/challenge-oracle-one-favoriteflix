import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-favoriteflix-le8x5rini-devluizlima.vercel.app/',
  headers: { 'Content-Type': 'Application/json' }
});

export default api