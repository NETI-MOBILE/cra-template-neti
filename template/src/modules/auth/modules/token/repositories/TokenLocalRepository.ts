import { appConfig } from 'appConfig';

import AbstractLocalRepository from 'base/AbstractLocalRepository';

export default class TokenLocalRepository extends AbstractLocalRepository {
  tableName(): string {
    return appConfig.tokenStorageKey;
  }
}
