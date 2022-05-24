import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ],
  providers: [DataService]
})
export class MyModuleModule { }
