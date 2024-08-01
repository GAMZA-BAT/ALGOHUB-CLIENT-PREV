import { SERVER_ENDPOINT } from '@/constants/server';
import * as _axios from 'axios';

export const axios = _axios.default.create({
  baseURL: SERVER_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAxios = _axios.default.create({
  baseURL: SERVER_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});
