import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/**
 * 用枚举管理key值，防止字符串拼错
 */
export enum CacheKeys {
  TOKEN, AUTO_LOGIN, USER_INFO
}

@Injectable()
export class CacheProvider {

  constructor(public storage: Storage) {
    console.log(CacheKeys[CacheKeys.TOKEN]);
  }

  get(key: CacheKeys) : Promise<any>{
    return this.storage.get(CacheKeys[key])
  }

  set(key: CacheKeys, value: any): Promise<any>{
    return this.storage.set(CacheKeys[key], value);
  }

  clear(): Promise<any>{
    return this.storage.clear();
  }

  remove(key: CacheKeys): Promise<any>{
    return this.storage.remove(CacheKeys[key]);
  }
}
