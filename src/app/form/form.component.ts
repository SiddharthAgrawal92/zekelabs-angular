import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log('Form Submitted Values:', this.model);
    alert(`Submitted Form Value ${JSON.stringify(this.model)}`)
  }

}
