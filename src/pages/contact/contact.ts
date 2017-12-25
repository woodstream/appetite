import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from './chat/chat';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  vm: any = {
    selectedSegment: 'one',
    chatList: [{
      firendId: '210000198410281948',
      friendName: 'Hancock',
      message: 'If at first you don’t succeed, call it version 1.0'
    },{
      firendId: '210000198410281948',
      friendName: 'Hancock',
      message: 'If at first you don’t succeed, call it version 1.0'
    },{
      firendId: '210000198410281948',
      friendName: 'Hancock',
      message: 'If at first you don’t succeed, call it version 1.0'
    }]
  }
  constructor(public navCtrl: NavController) {
  }

  onNext(friend: any){
    this.navCtrl.push(ChatPage, friend);
    // this.navCtrl.push("ChatDetailPage");
  }

}
