import axios from 'axios';
import { userSelectors } from '../redux';

// TODO: review those paths
export const addActiveQuiz = payload => axios.post('/quiz/active', payload);

export const updateActiveQuiz = payload => axios.put(`/quiz/active/${payload.id}`, payload);

export const deleteActiveQuiz = id => axios.delete(`/quiz/active/${id}`);

export const getActiveQuizList = () => axios.get('/games?isActive=true');

export const getTeacherQuizList = id => axios.get(`/teachers/${id}/quizzes`);

