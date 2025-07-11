import axios from 'axios';

const BASE_URL = '/api/entries/';

export const getEntries = (date) => {
  const url = date ? `${BASE_URL}?date=${date}` : BASE_URL;
  return axios.get(url);
};

export const createEntry = (data) => axios.post(BASE_URL, data);