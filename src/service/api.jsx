import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-devluizlima.onrender.com/',
  headers: { 'Content-Type': 'Application/json' }
});

export default api