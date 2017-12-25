import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopupMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popup-menu',
  templateUrl: 'popup-menu.html'
})
export class PopupMenuComponent {

  menus: any[];
  constructor(private viewCtrl: ViewController, params: NavParams) {
     this.menus = params.data;
  }

  onManuClick(menu) {
    this.viewCtrl.dismiss(menu);
  }

}
