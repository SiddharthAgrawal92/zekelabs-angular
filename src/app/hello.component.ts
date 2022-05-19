import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `  
  <h1>{{name2}} User,</h1>
  <h2>Hello {{name}}!</h2>
  <app-custom></app-custom>
  `,
  styles: [`h1 { font-family: Cursive; }`]
})
export class HelloComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() name: string;
  @Input() name2: string;
  @Input() child_desc: string;
  counter = 0;

  ngOnChanges(prevValue) {
    console.log('ngOnChanges prevValue', prevValue);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck Child', ++this.counter);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}