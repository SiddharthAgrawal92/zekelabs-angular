import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'root',
//   template: `
//     <h1>{{setup}}</h1>
//     <p>{{text}}</p>
//   `
// })
// class RootComponent {
//   setup: string;
//   text: string;

//   constructor() {
//     this.setup = "Hello";
//     this.text = "This is Root Component!";
//   }
// }

// @NgModule({
//   imports: [BrowserModule],
//   declarations: [RootComponent],
//   bootstrap: [RootComponent]
// })
// export class AppModule {
// }

// platformBrowserDynamic().bootstrapModule(AppModule);