import axios from 'axios';

export const getInstitutionList = () => axios.get('/institutions');