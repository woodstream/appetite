import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpProvider } from '../../providers/common/http';

@Injectable()
export class AboutProvider {

  constructor(public httpProvider: HttpProvider) {
    console.log('Hello AboutProvider Provider');
  }

  /**
   * 获取甜点轮播图片
   */
  getDessertSlides(){
    return this.httpProvider.get("assets/data/dessert-slides.json", false);
  }

  /**
   * 获取甜点列表
   */
  getDessertList(){
    return this.httpProvider.get("assets/data/dessert-list.json", false);
  }

  getPage(url: string){
    let h: Headers = new Headers({'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'});
    let option: any  = {headers: h};
    return this.httpProvider.get(url, true, option);
  }
}
