import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent implements OnInit {
  name: string = 'Angular 8';
  name2: string = 'Welcome';
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

  }

  changeName() {
    console.log('changeName');
    this.name = 'New Name';
  }

  change2Name() {
    console.log('change2Name');
    this.name = 'Back to the future';
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
    console.log('ngDoCheck Parent');
    console.log('this.description', this.description);
  }

}

export default AppComponent;