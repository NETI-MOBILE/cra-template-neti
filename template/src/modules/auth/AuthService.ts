import AuthApiRepository from './AuthApiRepository';
import { AuthFactory } from './AuthFactory';
import LoginDto from './forms/LoginDto';
import RegisterDto from './forms/RegisterDto';
import { SuccesAuth } from './models/SuccesAuth';

export default class AuthService {
  api: AuthApiRepository;
  factory: AuthFactory;

  constructor() {
    this.api = new AuthApiRepository();
    this.factory = new AuthFactory();
  }

  register = async (registerDto: RegisterDto): Promise<SuccesAuth> => {
    const { data } = await this.api.register(registerDto);
    return this.factory.create<SuccesAuth>(SuccesAuth, data.data);
  };

  login = async (dto: LoginDto): Promise<SuccesAuth> => {
    const { data } = await this.api.login(dto);
    return this.factory.create<SuccesAuth>(SuccesAuth, data.data);
  };

  logout = () => {
    return this.api.logout();
  };
}
