import Pagination from './Pagination';
import PaginationFactory from './PaginationFactory';

export default class PaginationService {
  paginationFactory: PaginationFactory;

  constructor() {
    this.paginationFactory = new PaginationFactory();
  }

  getPagination = (pagination: any) => {
    return this.paginationFactory.create<Pagination>(Pagination, pagination);
  };
}
