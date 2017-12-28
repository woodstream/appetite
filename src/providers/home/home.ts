import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpProvider } from '../../providers/common/http';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(private httpProvider: HttpProvider) {
    console.log('Hello HomeProvider Provider');
  }

  getFriendNews(){
    //第二个参数为false表示使用相对路径
    return this.httpProvider.get("assets/data/friend-news.json", false);
  }
}
