import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateGuard } from '../guards/activate.guard';
import { AdminComponent } from './admin/admin.component';
import { ContactMainComponent } from './contact-main/contact-main.component';

const routes: Routes = [
  { path: '', component: ContactMainComponent },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [ActivateGuard]
  },
  { path: ':role', component: ContactMainComponent },
  { path: ':role/:subRole', component: ContactMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
