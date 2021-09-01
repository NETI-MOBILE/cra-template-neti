import { AxiosRequestConfig } from 'axios';

import { Nullable } from '../../types/BaseTypes';
import { IApiConfig, IApisResponse } from '../ApiInterfaces';

export interface IAxiosConfig extends IApiConfig {
  data?: Object;
  config?: AxiosRequestConfig;
}

export interface IAxiosResponse<T> extends IApisResponse<T> {
  success: boolean;
  errors: Nullable<{
    [key: string]: string[];
  }>;
  message: Nullable<string>;
  data: T | T[];
}
