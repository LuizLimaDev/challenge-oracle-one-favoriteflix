import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spotty-rumbling-salamander.glitch.me',
  headers: { 'Content-Type': 'Application/json' }

});

export default api