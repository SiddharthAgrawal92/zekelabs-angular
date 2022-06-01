import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { DataService } from 'src/app/services/data.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'hello',
    template: `
 <!-- <div>
 <ng-content select="[projectedButton]"></ng-content>
 </div> --> 
  <ng-content></ng-content>
  <button (click)="ping()">Ping</button>
  {{message}}
  {{items| json}}
  <!-- <h1>{{name2}} User,</h1>
  <h2>Hello {{name}}!</h2> -->
  <app-custom></app-custom>
  <!-- <p [ngClass]="'redBackgroundClass'">This is a simple paragraph defined in hello comp</p> -->
  <button (click)="emitValueToParent()">Send to Parent</button>
  <br/>
  {{child_desc}}
  `,
    styleUrls: ['./hello.component.css'],
    // providers: [LoggerService]
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
    @ContentChild('myH1', { static: false }) helloH1: ElementRef;
    counter = 0;
    message: string;
    messageSubscription: Subscription;
    items: any = [];

    constructor(private loggerService: LoggerService,
        private dataService: DataService,
        private messageService: MessageService,
        private apiHttpService: ApiHttpService
    ) {
        console.log('Constructor is called!');
    }

    ngOnChanges(prevValue) {
        console.log('ngOnChanges prevValue', prevValue);
    }

    ngOnInit() {
        // this.apiHttpService.getData().subscribe(result => {
        //     this.items = result;
        // });
        console.log('ngOnInit');
        const items = this.dataService.getData();
        console.log('Items from DataService:', items);
        this.loggerService.info(`Hello Component Info: Your app is running on PORT - ${window.location.host.split(':')[1]}`);
        this.loggerService.warn('Hello Component Warn: Beware of fraudster 3rd party sites!');
        this.loggerService.error('Hello Component Error: Oops! Some hack has happened!');
    }

    ping() {
        this.messageSubscription = this.messageService.receiveMessage().subscribe((res: any) => {
            if (res) {
                this.message = res;
            }
        });
    }

    ngDoCheck() {
        // console.log('ngDoCheck Child', ++this.counter);
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        // console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        // console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
    }

    emitValueToParent() {
        this.helloH1.nativeElement.innerHTML = "Child 'Hello' has changed this Projected data";
        // this.sendDataToParent.emit('Hello from hello component to parent!');
    }
}