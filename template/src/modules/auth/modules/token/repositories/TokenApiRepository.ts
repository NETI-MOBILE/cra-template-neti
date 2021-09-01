import AbstractApiRepository from 'base/api/AbstractApiRepository';

export default class TokenApiRepository extends AbstractApiRepository {
  setAccessToken = (token: string) => {
    this.apiClient.setAccessToken(token);
  };

  clearAccessToken = () => {
    this.apiClient.clearAccessToken();
  };
}
