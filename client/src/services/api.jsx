import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Change in production
  withCredentials: true, // If backend uses cookie auth; remove if using token headers
});

// Optional: Add auth token interceptor if using token auth
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
