import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

declare let Wechat: any;


export interface IMessage {
  title?: string,
  description?: string,
  thumb?: string,
  mediaTagName?: string,
  messageExt?: string,
  messageAction?: string,
  media?: any
}

export interface IPayment {
  appid?: string,    //应用APPID
  partnerid: string, // 商户号（merchant id），如：'10000100'
  prepayid: string, // 预支付交易会话id（prepay id），如：'wx201411101639507cbf6ffd8b0779950874'
  package?: string,    //扩展字段
  noncestr: string, // 随机字符串（nonce），如：'1add1a30ac87aa2db72f57a2375d8fec'
  timestamp: string, // 时间戳（timestamp），如：'1439531364'
  sign: string, // 签名（signed string），如：'0CB01533B8C1EF103065174F50BCA001'
}

export enum ShareScene{
  SESSION =  0, // 聊天界面
  TIMELINE, // 朋友圈
  FAVORITE  // 收藏
}

/*
  Generated class for the WechatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WechatProvider {
  
  /**
   * 分享类型
   */
  static Type: any = {
      APP:     1,
      EMOTION: 2,
      FILE:    3,
      IMAGE:   4,
      MUSIC:   5,
      VIDEO:   6,
      WEBPAGE: 7
  };

  constructor() {
    
  }

  /**
   * 检查是否安装
   */
  isInstalled(successCallback: Function, failCallback: Function){
    Wechat.isInstalled(successCallback, failCallback);
  }


  checkBeforeWork(successCallback: Function, failCallback: Function){
    this.isInstalled(installed =>{
      //返回1或者true，所以用两个等号，不用三个
      if(installed == true){
        successCallback();
      }else{
        failCallback('微信未安装');
      }
    }, reason =>{
      failCallback(reason);
    });
  }
  
  /**
   * 分享文本
   * @param text 分享文本
   * @param scene 场景
   * @param successCallback 成功回调
   * @param failCallback 失败回调
   */
  shareText(text: string, scene: number, successCallback: Function, failCallback: Function){
    //分享自带安装检查
    Wechat.share({
      text: text,
      scene: scene   //
    }, successCallback, failCallback);
  }

  /**
   * 分享多媒体(e.g. link, photo, music, video etc)
   * @param message 分享消息
   * @param scene 场景
   * @param successCallback 成功回调
   * @param failCallback 失败回调
   */
  share(message: IMessage, scene: number, successCallback: Function, failCallback: Function){
    //分享自带安装检查
    Wechat.share({
      message: message,
      scene: scene
    }, successCallback, failCallback);
  }

  /**
   * 微信授权登录
   * @param successCallback 成功回调
   * @param failCallback 失败回调
   */
  auth(successCallback: Function, failCallback: Function){
    var scope = "snsapi_userinfo",
    state = "_" + (+new Date());
    Wechat.auth(scope, state, successCallback, failCallback);
  }

  /**
   * 微信支付
   * @param params 参数
   * @param successCallback 成功回调
   * @param failCallback 失败回调
   */
  payment(params: IPayment, successCallback: Function, failCallback: Function){
    this.checkBeforeWork(()=>{
      Wechat.sendPaymentRequest(params, successCallback, failCallback);
    }, (err) =>{
      failCallback(err);
    });   
  }
}
