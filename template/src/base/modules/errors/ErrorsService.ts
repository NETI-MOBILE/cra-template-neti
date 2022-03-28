import ErrorModel from './ErrorModel';
import ErrorsFactory from './ErrorsFactory';

export default class ErrorsService {
  errorsFactory: ErrorsFactory;

  constructor() {
    this.errorsFactory = new ErrorsFactory();
  }

  getErrors = (error: any) => {
    const errors = error?.response?.data?.errors;
    const errorMessages = this.errorsFactory.create<ErrorModel>(ErrorModel, errors).errorMessages;

    if (errorMessages) {
      return errorMessages;
    } else {
      return null;
    }
  };
}
