import { Directive, Input, ElementRef } from '@angular/core';

interface classObj{
  old: string;   //旧类名
  new: string;   //新类名
}

@Directive({
  selector: '[myMode]' // Attribute selector
})
export class MyModeDirective {

  option: classObj;

  @Input('myMode')
  set myMode(option: classObj){
    this.setClass(option);
  };

  constructor(private el: ElementRef) {
    this.setClass(this.option);
  }

  private setClass(option: classObj){
    if(option){
      this.el.nativeElement.classList.remove(option.old);    //移除旧类名
      this.el.nativeElement.classList.add(option.new);    //添加新类名
    }
  }
}
