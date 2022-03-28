import PaginationFactory from './PaginationFactory';
import PaginationModel from './PaginationModel';

export default class PaginationService {
  paginationFactory: PaginationFactory;

  constructor() {
    this.paginationFactory = new PaginationFactory();
  }

  getPagination = (pagination: any) => {
    return this.paginationFactory.create<PaginationModel>(PaginationModel, pagination);
  };
}
