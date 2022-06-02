import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @ViewChild('pBar', { static: false }) pBar: ElementRef;
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  completeProgressBar() {
    this.pBar.nativeElement.setAttribute('aria-valuenow', 100);
  }

  updateName() {
    this.name.setValue('Zekelabs');
  }

}
