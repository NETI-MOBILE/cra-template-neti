import AbstractModel from '../../AbstractModel';
import { Nullable } from '../../types/BaseTypes';

export default class Pagination extends AbstractModel {
  meta: Nullable<Meta> = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}

interface Meta {
  totalCount: number;
  currentOffset: number;
  limit?: number;
}
