export default abstract class AbstractLocalRepository {
  abstract tableName(): string;

  get = (): string | null => {
    const data = localStorage.getItem(this.tableName());
    return data ? JSON.parse(data) : null;
  };

  set = (data: any): void => {
    localStorage.setItem(this.tableName(), JSON.stringify(data));
  };

  remove = (): void => {
    localStorage.removeItem(this.tableName());
  };
}
