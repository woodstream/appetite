import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello SideMenuComponent Component');
    this.text = 'Hello World';
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  onOK(){
    this.viewCtrl.dismiss({result: 'test'});
  }
}
