import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FirstFramePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstFrame',
})
export class FirstFramePipe implements PipeTransform {

  video: any;
  /**
   * Takes a value and makes it lowercase.
   */
  transform(video: any) {
    this.video = video;
    video.removeEventListener("loadeddata", this.captureImage, false);
    video.addEventListener('loadeddata',  this.captureImage);
  }

  captureImage($event){
    let video = $event.target;
    let scale = 0.8;
    let canvas = document.createElement("canvas");
    // canvas.width = video.videoWidth * scale;
    // canvas.height = video.videoHeight * scale;
    canvas.width = 400;
    canvas.height = 300;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let result: any = canvas.toDataURL("image/png");
    video.poster = result;
    // return result;
  }
}
