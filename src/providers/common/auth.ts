import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpProvider } from './http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private httpProvider: HttpProvider) {
    
  }

    /**
   * 用户登录
   */
  login(username, password){
    let url = "/login";
    let data = {
        Memcode: username,
        PWD: password,
        IpAddr: ''
    };
    // return this.httpProvider.post(url, data);
    return Promise.resolve({result: true});
  }

}
