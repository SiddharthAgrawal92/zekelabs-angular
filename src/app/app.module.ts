import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component';
import { HelloComponent } from './hello.component';
import { CustomComponent } from './custom/my-custom';
import { ButtonClickDirective } from './button-click.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CustomComponent, ButtonClickDirective],
  bootstrap: [AppComponent],
})
export class AppModule { }
