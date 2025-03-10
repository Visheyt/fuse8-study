import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http',
  headers: {
    'Content-Type': 'application/json',
  },
});
