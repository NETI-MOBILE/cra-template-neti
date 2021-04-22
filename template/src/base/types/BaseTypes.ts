export type Nullable<T> = T | null;
export type StringOrNumber = string | number;
export type SortOrders = 'asc' | 'desc';

// useParam hook
export interface IStringParams {
  [key: string]: string;
}
