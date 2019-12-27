import axios from 'axios';

// TODO: review those paths

export const getQuestion = id => axios.get(`/questions/${id}`);

export const addQuestion = payload => axios.post('/questions', payload);

export const updateQuestion = ({ payload, id }) => axios.put(`/questions/${id}`, payload);

export const deleteQuestion = id => axios.delete(`/questions/${id}`);

export const getQuestionList = () => axios.get('/questions');

export const getTeacherCategoriesList = id => axios.get(`/teachers/${id}/categories`);

