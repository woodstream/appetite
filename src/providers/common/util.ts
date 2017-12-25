import 'rxjs/add/operator/map';

import { ActionSheetController, Alert, AlertController, AlertOptions, Events, Loading, LoadingController, LoadingOptions, ToastController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { WechatProvider, IMessage, ShareScene } from './wechat';
import { ConfigProvider } from './config';

declare let X2JS: any;

/*
  工具类
  Generated class for the UtilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilProvider {

  constructor(private toastCtrl: ToastController, private sanitizer: DomSanitizer,
  private loadingCtrl: LoadingController, private alertCtrl: AlertController, 
  private events: Events, private actionSheetCtrl: ActionSheetController, 
  private wechatProvider: WechatProvider) {

  }

 /*************** toast start ******************** */
 
  //成功
  success(message, position: string = 'top'): Promise<any> {
    return this.showToast(message, 'blue', 2000, position);
  }

  //警告
  warning(message, position: string = 'top'): Promise<any> {
    return this.showToast(message, 'yellow', 2000, position);
  }

  //错误
  error(message, position: string = 'top'): Promise<any> {
    return this.showToast(message, 'red', 2000, position);
  }

  showToast(message: string, color: string = '', duration: number = 2000, position: string = 'top'): Promise<any> {
    var cssClass = '';
    if(!!color){
      cssClass = 'toast-' + color;
    };
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      cssClass: cssClass 
    });
    return toast.present(toast);
  }
   /*************** toast end ******************** */

  /*************** 警告框 start ******************** */
  //公共方法
  showCommonAlert(opts?: AlertOptions) {
    if(!opts){
      opts = {
        title: '消息提示',
        buttons: ['Dismiss']
      };
    }
    let alert = this.alertCtrl.create(opts);
    alert.present();
  }

  presentAlert(title = "消息提示", subTitle = "") {
    let opts = {
      title: title,
      subTitle: subTitle,
      buttons: ['取消']
    };
    let alert = this.alertCtrl.create(opts);
    alert.present();
  }

  presentConfirm(title = "确定提示", message = "", confirmText?:string, cancelText?:string, confirmCallback?: Function, cancelCallback?: Function) {
    let buttons: any[] = [{
          text: cancelText || '取消',
          role: 'cancel',
          handler: cancelCallback
        },
        {
          text: confirmText || '确定',
          handler: confirmCallback
        }
    ]; 
    let option: AlertOptions = {
      title: title,
      message: message,
      buttons: buttons
    };
    let alert:Alert = this.alertCtrl.create(option);
    alert.present();
  }
  /**************** 警告框 end*********************** */

  //loading当dismiss后，必须重新创建
  createLoading(opts?: LoadingOptions, callback?: Function): Loading {
    if(!opts){
       opts = {
         content: "请稍后...",
         showBackdrop: false,
         duration: 3000
       };
    }
    let loader = this.loadingCtrl.create(opts);
    if(callback != null){
      loader.onDidDismiss((data, role) =>callback(data, role));
    }
    return loader;
  }


  /**
   * 深拷贝
   */
  deepCopy(originObj: any): any{
    return originObj ? JSON.parse(JSON.stringify(originObj)) : null;
  }

  /**
   * 处理html的安全信任
   * @param html raw html
   */
  bypassSecurityTrustHtml(html: string): any{
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  bypassSecurityTrustStyle(style: string): any {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  /**
   * 分组
   */
  groupBy(arrs: any[], key: string): any[]{
    var newArrs = [];
    var tempKey;
    if(Array.isArray(arrs)){
      //数据字典的概念
      arrs.forEach((value) =>{
        //把某个值作为key
        tempKey = value[key];
        if(!newArrs[tempKey]){
          newArrs[tempKey] = [value];
        }else{
          newArrs[tempKey].push(value);
        }
      });
    }
    return newArrs;
  }

  
  /**
   * 分享消息
   * @param message 消息
   * @param scene 场景
   */
  shareText(message: IMessage, scene: number = ShareScene.SESSION){
    this.wechatProvider.share(message, scene, ()=>{
      this.success('分享成功');
    },(err) => {
      let error: string = err + '';
      if(error.indexOf('取消') < 0){
        this.error('分享失败:' + err);
      }
    });
  }

  /**
   * 剔除并替换最久的数据
   * @param srcSource 数据源
   * @param item 数据项
   * @param maxCount 最大数量
   */
  edgeOutItem(srcSource: any[], item: any, maxCount: number = 10): any[]{
    if(!Array.isArray(srcSource)){
      srcSource = [item];
      return srcSource;
    }
    let findObj = srcSource.find(value => value.id === item.id);
    if(!findObj){
      //如果没有找到
       if(srcSource.length < maxCount){
          srcSource.unshift(item);
      }else{
        srcSource.pop();
        srcSource.unshift(item);
      }
    }
    return srcSource;
  }

  xmlToJson(xml: string): any{
    return new X2JS().xml2json(xml);
  }
}
