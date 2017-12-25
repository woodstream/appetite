import { Component, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CacheKeys, CacheProvider } from '../../providers/common/cache';
import { HomeProvider } from '../../providers/home/home';
import { UtilProvider } from '../../providers/common/util';
import { Keyboard } from '@ionic-native/keyboard';

import Swiper from 'swiper';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChildren('myMedia') mediaSouce: any;
  @ViewChild('inputToFocus') inputToFocus;
  frendNews: any[] = [];
  constructor(public navCtrl: NavController, private cacheProvider: CacheProvider, 
    private cd: ChangeDetectorRef, private homeProvider: HomeProvider,
    private utilProvider: UtilProvider, private keyboard: Keyboard) {
    
  }

  ionViewDidLoad(){
    setTimeout(() => {
      this.keyboard.show();
      // this.inputToFocus.setFocus();
    },2000)
    this.getFriendNews();
  }

  getFriendNews(){
    this.homeProvider.getFriendNews().then((res: any)=>{
      if(res.success){
        let rawSource = res.result;
        rawSource.forEach(element => {
          element.background = this.utilProvider.bypassSecurityTrustStyle("url(" + element.cover+ ") center no-repeat");
        });
        this.frendNews = rawSource;
        this.cd.detectChanges();
        this.initSwiper();
        // this.initVideo();
      }else{
        //如提示框等错误提示
        console.log(res.msg);
      }
    });
  }

  initVideo(){
    this.mediaSouce.forEach(element => {
      element.nativeElement.width = element.nativeElement.clientWidth;
      element.nativeElement.height = element.nativeElement.clientHeight;
    });

  }

  initSwiper(){
     new Swiper('.near-join .swiper-container', {
        paginationClickable: true,
        slidesPerView:  2,
        width: 280,
        spaceBetween : 10,
        watchActiveIndex: true,
        initialSlide: 0,//初始化显示第几个
        zoom: true,//双击,手势缩放
        loop: false,//循环切换
        lazyLoading: true,//延迟加载
        lazyLoadingOnTransitionStart: true,//    lazyLoadingInPrevNext : true,
      });
  }
}
