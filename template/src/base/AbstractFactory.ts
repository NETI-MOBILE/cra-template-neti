export default abstract class AbstractFactory {
  create<T>(Model: any, data: any): T {
    return new Model(data);
  }

  createList<T>(Model: any, data: any): T[] {
    return data.map((json: any) => new Model(json));
  }
}
