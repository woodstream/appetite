import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// import Swiper from 'swiper';
declare let Swiper: any;
/**
 * Generated class for the MySwiperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-swiper',
  templateUrl: 'my-swiper.html'
})
export class MySwiperComponent {

  @ViewChild('panel') panel: ElementRef;

  @Input() cssName: string = "main";    //类名
  @Input() center: boolean = false;   //是否居中
  @Input() width: number = 280;     //宽度
  @Input() slidesPerView: any = 2;    //预览歌手
  @Input() source: string[] = [];

  constructor() {
    console.log('Hello MySwiperComponent Component');
    
  }

  ionViewDidLoad() {
    //http://www.swiper.com.cn/api/index.html
    this.reset(); 
  }

  reset(){
    // let selector = this.cssName? '.' + this.cssName + ' .swiper-container' : '.swiper-container'
    // new Swiper(selector, {
    //     paginationClickable: true,
    //     centeredSlides: this.center,
    //     slidesPerView:  this.slidesPerView,
    //     width: this.width,
    //     spaceBetween : 10,
    //     watchActiveIndex: true,
    //     initialSlide: 0,//初始化显示第几个
    //     zoom: true,//双击,手势缩放
    //     loop: false,//循环切换
    //     lazyLoading: true,//延迟加载
    //     lazyLoadingOnTransitionStart: true,//    lazyLoadingInPrevNext : true,
    // });
  }
}
