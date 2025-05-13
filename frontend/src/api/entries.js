import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/entries/';

export const getEntries = () => axios.get(BASE_URL);
export const createEntry = (data) => axios.post(BASE_URL, data);