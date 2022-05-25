import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateGuard } from '../guards/activate.guard';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ActivateGuard]
  },
  { path: ':role', component: ContactComponent },
  { path: ':role/:subRole', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
