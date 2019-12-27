import axios from 'axios';

export const getGroupList = () => axios.get('/groups');