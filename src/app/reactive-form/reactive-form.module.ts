import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { BasicComponent } from './basic/basic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvanceComponent } from './advance/advance.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [BasicComponent, AdvanceComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ReactiveFormModule { }
