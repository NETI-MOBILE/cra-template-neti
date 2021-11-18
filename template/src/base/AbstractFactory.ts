import Pagination from './modules/pagination/Pagination';

export default abstract class AbstractFactory {
  create<T>(Model: any, data: any): T {
    return new Model(data);
  }

  createList<T>(Model: any, data: any): T[] {
    return data.map((json: any) => new Model(json));
  }

  createPaginationList<T>(Model: any, data: { items: any[]; pagination: any }): { items: T[]; pagination: Pagination } {
    const items = this.createList<T>(Model, data?.items);
    const pagination = this.create<Pagination>(Pagination, data?.pagination);

    return { items, pagination };
  }
}
