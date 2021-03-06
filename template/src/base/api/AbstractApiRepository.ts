import { ApiClientTypes } from './ApiClientTypes';
import IApiClient from './IApiClient';
import AxiosClient from './axios/AxiosClient';

export default abstract class AbstractApiRepository {
  apiClient!: IApiClient;

  private static clients = {
    [ApiClientTypes.axios]: new AxiosClient(),
  };

  constructor(apiClientType = ApiClientTypes.axios) {
    this.setApiClient(AbstractApiRepository.clients[apiClientType]);
  }

  setApiClient = (apiClient: IApiClient) => {
    this.apiClient = apiClient;
  };
}
