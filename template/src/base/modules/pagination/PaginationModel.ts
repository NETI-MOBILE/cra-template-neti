import AbstractModel from 'base/AbstractModel';

export default class PaginationModel extends AbstractModel {
  totalCount: number = 0;
  currentOffset: number = 0;
  limit?: number = 0;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
