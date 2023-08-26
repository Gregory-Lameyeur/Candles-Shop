import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Remplacez ceci par l'URL de base de votre backend
});

export default instance;
