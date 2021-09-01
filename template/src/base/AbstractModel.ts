export default abstract class AbstractModel {
  getAttributes(): string[] {
    return Object.keys(this);
  }

  load(data: any): void {
    this.getAttributes().forEach(attribute => {
      if (data && data.hasOwnProperty(attribute)) {
        // @ts-ignore
        this[attribute] = data[attribute];
      }
    });
  }
}
