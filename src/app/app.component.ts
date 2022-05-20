import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
class AppComponent implements OnInit {
  @ViewChild('myParagraph', { static: true }) paraElement: ElementRef;
  parentName: string = 'Angular 8';
  parentName2: string = 'Welcome';
  changeIt: 'blueBackgroundClass'
  // isDisabled: boolean = true;
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

  constructor() {

  }

  ngOnChanges() {

  }

  ngOnInit() {
    // console.log('parent NgOnInit', this.paraElement.nativeElement.value);
  }

  changeName() {
    console.log('changeName');
    this.parentName = 'New Name';
  }

  change2Name() {
    // this.paraElement.nativeElement.innerHTML = 'New thing has inserted in paragraph';
    // console.log('change2Name');
    // this.parentName = 'Back to the future';
    this.description = 'Default is now assigned';
    // this.show = !this.show;
    this.flag = !this.flag;
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

}

export default AppComponent;