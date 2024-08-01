import { ContentType, SERVER_ENDPOINT } from '@/constants/server';
import { AuthManager } from '@/datamanager/authManager';
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
    Authorization: 'Bearer ' + AuthManager.getInstance().getToken(),
  },
});

export const formAxios = _axios.default.create({
  baseURL: SERVER_ENDPOINT,
  headers: {
    'Content-Type': ContentType.FORM_DATA,
    Authorization: 'Bearer ' + AuthManager.getInstance().getToken(),
  },
});