import AbstractDto from 'base/AbstractDto';

export default class RegisterDto extends AbstractDto {
  deviceId: string = 'web';
  deviceType: string = 'web';
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(props: any) {
    super();
    this.load(props);
  }
}
