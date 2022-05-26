import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageMainComponent } from './homepage-main/homepage-main.component';
import { HelloComponent } from './hello/hello.component';
import { CustomComponent } from './custom/my-custom';


@NgModule({
  declarations: [
    HomepageMainComponent,
    HelloComponent,
    CustomComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
