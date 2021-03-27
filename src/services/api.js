import axios from 'axios';

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public`,
  params: {
    apikey: `90dd7684a5f699c58a5b4b6432ed3086`,
  },
});

export default api;
