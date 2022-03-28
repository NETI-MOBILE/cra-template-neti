import AbstractModel from './AbstractModel';

export default class AbstractDto extends AbstractModel {
  static populate(data: any) {
    const dto = new this();
    const attributes = dto.getAttributes();

    for (let i = 0; i < attributes.length; i++) {
      if (data && data.hasOwnProperty(attributes[i])) {
        (dto as any)[attributes[i]] = data[attributes[i]];
      }
    }

    return dto;
  }
}
