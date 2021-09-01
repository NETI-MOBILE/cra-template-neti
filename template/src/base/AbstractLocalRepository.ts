export default abstract class AbstractLocalRepository {
  abstract tableName(): string;

  get = (tableName?: string): string | null => {
    const data = localStorage.getItem(tableName || this.tableName());
    return data ? JSON.parse(data) : null;
  };

  set = (data: any, tableName?: string): void => {
    localStorage.setItem(tableName || this.tableName(), JSON.stringify(data));
  };

  remove = (tableName?: string): void => {
    localStorage.removeItem(tableName || this.tableName());
  };
}
