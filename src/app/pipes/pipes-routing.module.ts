import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';


const routes: Routes = [
  {
    path: '', component: PipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
