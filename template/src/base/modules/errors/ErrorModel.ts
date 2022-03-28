import AbstractModel from 'base/AbstractModel';

export default class ErrorModel extends AbstractModel {
  errorMessages: { [key: string]: string | string[] } | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
