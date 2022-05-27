import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Zekelabs');
  }

}
