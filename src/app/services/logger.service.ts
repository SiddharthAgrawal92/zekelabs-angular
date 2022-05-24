import { Component, Injectable } from '@angular/core';
import AppComponent from '../app.component';
import { HelloComponent } from '../hello.component';

export abstract class Logger {
  info: any;
  warn: any;
  error: any;
}

@Injectable({
  providedIn: null
})
export class LoggerService implements Logger {

  constructor() { }

  get info() {
    return console.info.bind(console);
  }

  get warn() {
    return console.warn.bind(console);
  }

  get error() {
    return console.error.bind(console);
  }

}