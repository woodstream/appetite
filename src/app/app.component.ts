import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

declare let window: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  getRequest(url: string){
    var reqParams = new Object();  
    var index: number = url.indexOf("?"); 
    if (index != -1) {   
       var str: string = url.substr(index + 1);   
       var keyValues: string[] = str.split("&");  
       keyValues.forEach( keyValue =>{
         let valuePairs = keyValue.split('=');
         reqParams[valuePairs[0].trim()] = valuePairs[1].trim();
       }) 
    }   
    return reqParams;   
   }
}
