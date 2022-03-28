export default abstract class AbstractModel {
  getAttributes(): string[] {
    return Object.keys(this);
  }

  load(data: any): void {
    const attributes = this.getAttributes();

    for (let i = 0; i < attributes.length; i++) {
      if (data && data.hasOwnProperty(attributes[i])) {
        this[attributes[i] as keyof this] = data[attributes[i]];
      }
    }
  }
}
