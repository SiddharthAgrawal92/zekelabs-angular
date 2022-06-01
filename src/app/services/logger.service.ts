import { Injectable } from '@angular/core';
import { ResolverModule } from '../resolver/resolver.module';
export abstract class Logger {
  info: any;
  warn: any;
  error: any;
}

@Injectable({
  providedIn: ResolverModule
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
