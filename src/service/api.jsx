import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'https://json-server-favoriteflix.vercel.app',
=======
  baseURL: 'https://json-server-devluizlima.onrender.com/',
>>>>>>> parent of 6b8484a (feature adicionar categoria v1.0)
  headers: { 'Content-Type': 'Application/json' }
});

export default api