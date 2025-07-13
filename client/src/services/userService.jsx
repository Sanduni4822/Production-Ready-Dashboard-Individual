import API from './api';

// Dashboard data
export const fetchDashboard = () => API.get('/dashboard');

// User profile (default to "me" if userId omitted)
export const getUserProfile = (userId = 'me') => API.get(`/users/${userId}`);

export const updateUserProfile = (userId = 'me', data) =>
  API.put(`/users/${userId}`, data);

// User settings
export const getUserSettings = (userId = 'me') => API.get(`/users/${userId}/settings`);

export const updateUserSettings = (userId = 'me', data) =>
  API.put(`/users/${userId}/settings`, data);
