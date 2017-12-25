import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  user: any = {
    name: 'Renee Byrd',
    profileImage: 'assets/imgs/girl1.jpg',
    description: 'The apricots are as simple',
    works: 59,
    followers: 2915,
    following: 125
  };

  vm: any = {
    msgNum: 0
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  onInvite(){

  }

}
