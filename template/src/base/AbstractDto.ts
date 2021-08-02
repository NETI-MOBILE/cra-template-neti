import AbstractModel from './AbstractModel';

export default class AbstractDto extends AbstractModel {
  static populate(data: any) {
    const dto = new this();

    dto.getAttributes().forEach(attribute => {
      if (data && data.hasOwnProperty(attribute)) {
        (dto as any)[attribute] = data[attribute];
      }
    });

    return dto;
  }
}
