import { NgModule } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipeComponent } from './pipe/pipe.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PipeComponent],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  providers: [PercentPipe]
})
export class PipesModule { }
