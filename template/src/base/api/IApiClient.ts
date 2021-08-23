export default interface IApiClient {
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;

  get: <T extends {}>(config: any) => any;
  post: <T extends {}>(config: any) => any;
  put: <T extends {}>(config: any) => any;
  delete: <T extends {}>(config: any) => any;
}
