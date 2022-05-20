import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hello',
  template: `  
 <!-- <div>
 <ng-content select="[projectedButton]"></ng-content>
 </div> -->
  <ng-content></ng-content>
  <!-- <h1>{{name2}} User,</h1>
  <h2>Hello {{name}}!</h2> -->
  <!-- <app-custom></app-custom> -->
  <!-- <p [ngClass]="'redBackgroundClass'">This is a simple paragraph defined in hello comp</p> -->
  <button (click)="emitValueToParent()">Send to Parent</button>
  `,
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // @ContentChild('myH1', { static: false }) helloH1: ElementRef;
  @Input('aliasedName') name: string;
  @Input() name2: string;
  @Input() child_desc: string;
  @Output('newHelloEmitter') sendDataToParent: EventEmitter<string> = new EventEmitter();
  counter = 0;

  constructor() {
    console.log('Constructor is called!');
  }

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

  emitValueToParent() {
    // this.helloH1.nativeElement.innerHTML = 'Projected Value for H1 has changed.';
    // this.sendDataToParent.emit('Hello from hello component to parent!');
  }
}