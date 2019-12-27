import axios from 'axios';

// TODO: review those paths
export const login = payload => axios.post('/auth/login', payload);

export const checkToken = () => axios.get('/users/token');

export const getUser = id => axios.get(`/users/${id}`);

export const getCurrentUser = () => axios.get('/auth/current-user');

export const addUser = payload => axios.post('/users', payload);

export const updateUser = payload => axios.put(`/users/${payload.id}`, payload);

export const deleteUser = id => axios.delete(`/users/${id}`);

export const getUserList = payload => axios.get('/users');