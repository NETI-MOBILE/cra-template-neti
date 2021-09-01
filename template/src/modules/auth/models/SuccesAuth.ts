import AbstractModel from 'base/AbstractModel';

export class SuccesAuth extends AbstractModel {
  type: string | null = null;
  accessToken: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
