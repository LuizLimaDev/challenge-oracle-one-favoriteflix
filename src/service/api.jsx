import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-devluizlima.onrender.com/',
  timeout: 5000,
  headers: { 'Content-Type': 'Application/json' }
});

export default api