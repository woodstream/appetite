import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ChatPage } from './chat/chat';
import { ChatProvider } from '../../providers/chat/chat';

export interface ContactModel{
  friendId: string;
  friendName: string
  message: string
}

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  vm: {
    selectedSegment: string,
    explainList: ContactModel[],
    contactList: ContactModel[],
  } = {
    selectedSegment: 's0',
    explainList: [],
    contactList: []
  }

  @ViewChild(Slides) slides: Slides;

  constructor(private navCtrl: NavController, private chatProvider: ChatProvider) {
  }

  onSlideDidChange() {
    let index: number = this.slides.getActiveIndex();
    if(index >= 0 && index <=2){
      //由于索引直接用数字的话，内部方法有的转换为字符串，有的转为整型，避免不必要麻烦，所以用字符串处理
      this.vm.selectedSegment = "s" + index;
    }
  }

  /**
   * 跳转到聊天节目
   * @param friend 好友信息
   */
  onChat(friend: ContactModel){
    this.navCtrl.push(ChatPage, friend);
  }

  /**
   * segment点击切换slide滑动
   * @param index 索引
   */
  goToSlide(index: number) {
    if(this.vm.selectedSegment != 's' + index){
      this.slides.slideTo(index, 500);
    }
  }

  ionViewDidLoad(){
    this.getExplainList();    
    this.getContactList();
  }

  /**
   * 获取联系人列表
   */
  getContactList(){
    this.chatProvider.getContactList().then((res: any) => {
      this.vm.contactList = res.result;
    });
  }

  getExplainList(){
    this.chatProvider.getExplainList().then((res: any) => {
      this.vm.explainList = res.result;
    });
  }
}
