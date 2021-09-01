import AbstractApiRepository from 'base/api/AbstractApiRepository';

import LoginDto from './forms/LoginDto';
import RegisterDto from './forms/RegisterDto';

export default class AuthApiRepository extends AbstractApiRepository {
  register = (dto: RegisterDto) => {
    return this.apiClient.post({
      url: `/auth/registration`,
      data: dto,
    });
  };

  login = (dto: LoginDto) => {
    return this.apiClient.post({ url: `/auth/login`, data: dto });
  };

  logout = () => {
    return this.apiClient.post({ url: `/auth/logout` });
  };
}
