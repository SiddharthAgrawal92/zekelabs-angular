import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MessageService } from 'src/app/services/message.service';

import { Observable, from, timer, of } from 'rxjs';

@Component({
  selector: 'app-homepage-main',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.css']
})
export class HomepageMainComponent implements OnInit {

  @ViewChild('myParagraph', { static: true }) paraElement: ElementRef;
  parentName: string = 'Angular 8';
  parentName2: string = 'Welcome';
  changeIt: 'blueBackgroundClass'
  isDisabled: boolean = false;
  imagePath: string = '../assets/images/sample.jpeg';
  imageName: string = 'image_name';
  maliciousString: string = "Template malicious string <script>alert('I am dangerous!')</script>";
  description: string;
  items: { name: string, profile: string }[] = [
    { name: 'John', profile: 'SSE' },
    { name: 'Michael', profile: 'QA' },
    { name: 'Nancy', profile: 'Designer' },
    { name: 'Mathew', profile: 'Developer' },
  ]
  show: boolean = true;
  switch_expression = "match_span_1";
  customStyle = { 'color': 'white', 'padding-left': '10px', 'margin-top': '10' };
  customStyle2 = { 'color': 'yellow', 'padding-left': '10px', 'margin-top': '10' };
  flag = true;

  constructor(private dataService: DataService,
    private messageService: MessageService,
    // private loggerService: LoggerService
  ) {

  }

  ngOnChanges() {

  }

  ngOnInit() {

    // console.log('parent NgOnInit (Para Value):', this.paraElement.nativeElement.innerHTML);
    // this.loggerService.info('App Comp Info: This is a app component/root.');
    // this.loggerService.warn('App Comp Warn: Warning has raised from component/root.');
    // this.loggerService.error('App Comp Error: Error has occurred in app component/root.');
  }

  fetchData() {
    const newItems = this.dataService.getData();
    this.items = [...this.items, ...newItems];
  }

  pong() {
    this.messageService.sendMessage(`${Math.floor(Math.random() * 100)} - Message from parent!`);
  }

  changeName() {
    console.log('changeName');
    this.parentName = 'New Name';
  }

  change2Name() {
    // this.paraElement.nativeElement.innerHTML = 'New thing has inserted in paragraph';
    // console.log('change2Name');
    // this.parentName = 'Back to the future';
    this.description = 'Description sent from parent';
    // this.show = !this.show;
    // this.flag = !this.flag;
  }

  enableSecondSpan() {
    this.switch_expression = "match_span_2";
  }

  getData() {
    return this.getData;
  }

  ngDoCheck() {
    // console.log('ngDoCheck Parent');
    // console.log('this.description', this.description);
  }

  handleChildOutputValue($event) {
    console.log('Emitted value from child is--> ', $event);
  }

  async useObservable() {
    //await- Whenever we a
    new Promise((resolve, reject) => {
      //task need to be done or some logic
      // resolve({ 'name': 'Siddharth', Year: 2022, gift: 'Car' });
      reject('Sorry for this time! I will surely give you next year.');
    }).then(res => {
      console.log('Promise is resolved Thanks!', res);
    }).catch(err => {
      console.log(err);
    })

    // let observer = {
    //   next: (x) => console.log('received value', x),
    //   error: (err) => console.error('Some Error', err),
    //   complete: () => console.log('done')
    // }
    // let observable = new Observable(function subscribe(observer) {
    //   console.log('Inside Observable execution');
    //   try {
    //     observer.next(1);
    //     observer.next(2);
    //     observer.next(3);
    //     setTimeout(() => {
    //       observer.next(4);
    //       observer.complete();
    //       observer.next(5);
    //     }, 3000);
    //   } catch (err) {
    //     observer.error(err);
    //   }
    // });
    // console.log('before subscribe');
    // observable.subscribe(observer);
    // console.log('after subscribe');

    let input = from([1, 2, 3, 4, 5]);
    let input2 = of('Apple', 'Grapes', 'Plum');

    input2.subscribe(res => {
      console.log('of', res);
    })

    input.subscribe(res => {
      console.log(res);
    });

    function square(input) {
      let output = new Observable(function subscribe(observer) {
        console.log('Execution has started for Square');
        input.subscribe({
          next: (val) => observer.next(val * val),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
      });
      return output;
    }

    console.log('Start of observable');
    const output = square(input);
    console.log('Subscription started for Output');
    const outPutSubscription = output.subscribe(x => console.log('Square input value is : ', x));

    const myTimer = timer(1000, 2000);
    const timerSubscription = myTimer.subscribe(val => console.log(val));

    setTimeout(() => {
      outPutSubscription.unsubscribe();
      timerSubscription.unsubscribe();
    }, 7000);

  }

}
