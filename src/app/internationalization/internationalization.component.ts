import { Component, OnInit } from '@angular/core';
import LocaleHi from '@angular/common/locales/hi';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocaleHi);

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.css']
})
export class InternationalizationComponent implements OnInit {

  myDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
