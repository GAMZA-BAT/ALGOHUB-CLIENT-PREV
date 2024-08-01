import { ContentType, SERVER_ENDPOINT } from '@/constants/server';
import * as _axios from 'axios';

export const axios = _axios.default.create({
  baseURL: SERVER_ENDPOINT,
  headers: {
    'Content-Type': ContentType.JSON,
  },
});

export const authAxios = _axios.default.create({
  baseURL: SERVER_ENDPOINT,
  headers: {
    'Content-Type': ContentType.JSON,
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

export const formAxios = _axios.default.create({
  baseURL: SERVER_ENDPOINT,
  headers: {
    'Content-Type': ContentType.FORM_DATA,
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});