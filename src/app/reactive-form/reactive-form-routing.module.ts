import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceComponent } from './advance/advance.component';
import { BasicComponent } from './basic/basic.component';


const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'advanced', component: AdvanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
