import { makeAutoObservable } from 'mobx';

import AuthService from './AuthService';
import LoginDto from './forms/LoginDto';
import RegisterDto from './forms/RegisterDto';
import TokenService from './modules/token/TokenService';

export class AuthStore {
  loading = false;
  errorMessages: any = {};

  isAuth = false;
  completeCheckAuth = false;

  private authService: AuthService;
  private tokenService: TokenService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
    this.tokenService = new TokenService();
  }

  register = (values: any): void => {
    this.setLoading(true);

    const dto = RegisterDto.populate(values) as RegisterDto;

    this.authService
      .register(dto)
      .then(({ accessToken }) => {
        if (accessToken) {
          this.tokenService.saveToken(accessToken);
          this.setIsAuth(true);
        }
      })
      .catch((error: any) => {
        const errors = error?.response?.data?.errors;

        if (errors) {
          this.setErrors(errors);
        } else {
          this.setErrors({});
        }
      })
      .finally(() => this.setLoading(false));
  };

  login = (values: any): void => {
    this.setLoading(true);

    const dto = LoginDto.populate(values) as LoginDto;

    this.authService
      .login(dto)
      .then(({ accessToken }) => {
        if (accessToken) {
          this.tokenService.saveToken(accessToken);
          this.setIsAuth(true);
        }

        this.resetStore();
      })
      .catch((error: any) => {
        const errors = error?.response?.data?.errors;

        if (errors) {
          this.setErrors(errors);
        } else {
          this.setErrors({});
        }
      })
      .finally(() => this.setLoading(false));
  };

  logout = (): void => {
    this.setLoading(true);

    this.authService
      .logout()
      .then(() => {
        this.tokenService.deleteToken();

        window.location.href = '/';
      })
      .catch((error: any) => {})
      .finally(() => this.setLoading(false));
  };

  setLoading = (value: boolean): void => {
    this.loading = value;
  };

  checkAuth = (): void => {
    const accessToken = this.tokenService.getToken();

    if (accessToken) {
      this.tokenService.saveToken(accessToken);
      this.isAuth = true;
      this.completeCheckAuth = true;

      return;
    }

    this.isAuth = false;
    this.completeCheckAuth = true;
  };

  setCompleteCheckAuth = (value: boolean): void => {
    this.completeCheckAuth = value;
  };

  setIsAuth = (state: boolean): void => {
    this.isAuth = state;
  };

  setErrors = (errors: Object): void => {
    this.errorMessages = errors;
  };

  removeError = (fieldName: string): void => {
    delete this.errorMessages[fieldName];
  };

  resetStore = (): void => {
    this.loading = false;
    this.errorMessages = {};

    this.isAuth = false;
    this.completeCheckAuth = true;
  };
}
