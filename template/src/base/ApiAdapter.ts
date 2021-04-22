import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import ApiHelper from './helpers/ApiHelper';
import { appConfig } from '../appConfig';
import Notification from '../utils/NotificationUtil';

export const api = axios.create();

// statuses
const SUCCESS_STATUSES = [200, 201];
const SERVER_ERROR = 500;

api.defaults.baseURL = process.env.NODE_ENV !== 'production' ? appConfig.apiUrl.dev : appConfig.apiUrl.prod;

if (process.env.NODE_ENV === 'production' && !appConfig.apiUrl.prod) {
  console.error('env.REACT_APP_API_URL - api url is not found!');
}

api.interceptors.request.use(
  async config => {
    const newConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        'App-Platform': 'web',
        ...config.headers,
      },
    };
    return newConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    if (!SUCCESS_STATUSES.includes(response.status)) {
      Notification.showError(response.data?.message || 'Unknown error');

      return Promise.reject(response);
    }

    if (response?.data?.message) {
      Notification.showSuccess(response?.data?.message);
    }

    return response;
  },
  error => {
    // global showing error messages
    console.log('response error', error?.response);

    ApiHelper.getApiErrors(error?.response?.data);

    if (error.response?.status === SERVER_ERROR) {
      Notification.showError('Server error');
    }

    return Promise.reject(error);
  },
);

export const setAccessToken = (token: string) => {
  api.defaults.headers['Access-Token'] = token;
};

export const clearAccessToken = () => {
  api.defaults.headers['Access-Token'] = null;
};

export interface IConfig {
  url: string;
  data?: Object;
  config?: AxiosRequestConfig;
}

export interface IResponseCommon<T> {
  success: boolean;
  errors: {
    [key: string]: string[];
  } | null;
  message: string | null;
  data: T;
}
