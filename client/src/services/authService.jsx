// src/services/authService.js
import API from './api';

export const loginUser = (credentials) => API.post('/auth/login', credentials);

// you can add logout, register, refresh tokens here later
