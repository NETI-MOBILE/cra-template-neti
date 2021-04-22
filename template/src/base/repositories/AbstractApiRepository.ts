import { api, IConfig, IResponseCommon } from '../ApiAdapter';

export default abstract class AbstractApiRepository {
  get = <T extends {}>(config: IConfig) => {
    return api.get<IResponseCommon<T>>(config.url);
  };

  post = <T extends {}>(config: IConfig) => {
    return api.post<IResponseCommon<T>>(config.url, config.data);
  };

  put = <T extends {}>(config: IConfig) => {
    return api.put<IResponseCommon<T>>(config.url, config.data);
  };

  delete = <T extends {}>(config: IConfig) => {
    return api.delete<IResponseCommon<T>>(config.url);
  };
}
