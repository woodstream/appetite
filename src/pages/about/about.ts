import { PopupMenuComponent } from './../../components/popup-menu/popup-menu';
import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NavController, Slides, PopoverController } from 'ionic-angular';
import { AboutProvider } from '../../providers/about/about';
import { ChatPage } from '../contact/chat/chat';

import Swiper from 'swiper';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SideMenuComponent } from '../../components/side-menu/side-menu';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides;
  vm: {
    dessertSlides: any[] ,    //轮播数据源
    dessertList: any[],    //甜点列表数据源
    selectedSegment: string    //segment选择对象
  } = {
    dessertSlides: [],
    dessertList: [],
    selectedSegment: 'one'
  };

  constructor(public navCtrl: NavController, private aboutProvider: AboutProvider, 
    private cd: ChangeDetectorRef, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getDessertSlides();
    this.getDessertList();
  }

  /**
   * 获取甜点轮播图片
   */
  getDessertSlides(){
    return this.aboutProvider.getDessertSlides().then((rep: any) => {
      this.vm.dessertSlides = rep.result;
      this.cd.detectChanges();
      this.initSwiper();
      return rep;
    });
  }

  /**
   * 获取甜点列表
   */
  getDessertList(){
    return this.aboutProvider.getDessertList().then((rep: any)=>{
      this.vm.dessertList = rep.result;
      return rep;
    });
  }

  initSwiper() {
    new Swiper('.wheel .swiper-container', {
      slidesPerView: 2,
      initialSlide: 1,
      watchActiveIndex: true,
      centeredSlides: true,
      resizeReInit: true,
      keyboardControl: true,
      grabCursor: true
    });
  }

  onShowPopupMenu(){
    let popover = this.popoverCtrl.create(PopupMenuComponent, ['全部', '甜品', '正餐', '饮品']);
    popover.onDidDismiss(data => {
      if(data){
       
      }
    });
    popover.present({ ev: event });
  }

  onShowSideMenu() {
    const transition: any = {enter: "modal-from-right-enter", leave: "modal-from-right-leave"};
    let modal = this.modalCtrl.create(SideMenuComponent, {}, {
      showBackdrop: true,
      enableBackdropDismiss: true,
      enterAnimation: transition.enter,
      leaveAnimation: transition.leave
    });
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

}
