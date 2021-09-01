import AbstractDto from 'base/AbstractDto';

export default class LoginDto extends AbstractDto {
  deviceId: string = 'web';
  deviceType: string = 'web';
  email: string = '';
  password: string = '';

  constructor(props: any) {
    super();
    this.load(props);
  }
}
