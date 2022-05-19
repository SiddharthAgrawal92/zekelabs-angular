import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonClick]'
})
export class ButtonClickDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.color = 'blue';
  }
}
