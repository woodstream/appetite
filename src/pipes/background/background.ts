import { Pipe, PipeTransform } from '@angular/core';
import { UtilProvider } from '../../providers/common/util';

/**
 * Generated class for the BackgroundPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'background',
})
export class BackgroundPipe implements PipeTransform {

  /**
   *
   */
  constructor(private utilProvider: UtilProvider) {
    
    
  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let url = "background: url(" + value+ ") center center / cover no-repeat;";
    return this.utilProvider.bypassSecurityTrustStyle(url);
  }
}
