import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { ImagePicker} from '@ionic-native/image-picker';

/*
  Generated class for the FileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileProvider {

  constructor(private camera: Camera, 
    private actionSheetCtrl: ActionSheetController, private imagePicker: ImagePicker) {
    console.log('Hello FileProvider Provider');
  }

  /**
   * 图像多选
   */
  mutiImagePick(successCallback: Function, errorCallback: Function, options?: any){
    if(!options){
      options = {
        title: '选择相册',
        maximumImagesCount: 9,
        width: 400,
        height: 400,
        quality: 80}
    }
    this.imagePicker.getPictures(options).then(results =>successCallback(results),
      error => errorCallback(error));
  }

  /**
   * 显示拍照选择
   */
  choosePhoto(successCallback, errorCallback, options?: CameraOptions) {
    if(!options){
      options = {
          destinationType: this.camera.DestinationType.FILE_URI,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          encodingType: this.camera.EncodingType.JPEG,
          saveToPhotoAlbum: true,
          mediaType: 0,
          targetWidth: 400,
          targetHeight: 400
      };
    }
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择图片来源',
      buttons: [
        {
          text: '相册',
          role: 'destructive',
          handler: () => {
            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
            this.getLocalImage(successCallback, errorCallback, options);
          }
        },
        {
          text: '拍照',
          handler: () => {
            options.sourceType = this.camera.PictureSourceType.CAMERA
            this.getLocalImage(successCallback, errorCallback, options);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ]
    });
    actionSheet.present();
  }

    /**
   * Default is CAMERA. PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2
   */
  getLocalImage(successCallback, errorCallback, options: CameraOptions){
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      successCallback(imageData);
    }, (err) => {
      // Handle error
      errorCallback(err);
    });
  }

}
