export default abstract class AbstractModel {
  getAttributes() {
    return Object.keys(this);
  }

  load(data: any) {
    this.getAttributes().forEach(attribute => {
      if (data && data.hasOwnProperty(attribute)) {
        // @ts-ignore
        this[attribute] = data[attribute];
      }
    });
  }
}
