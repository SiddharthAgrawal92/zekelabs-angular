import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildAComponent } from "./contact/child-a/child-a.component";
import { ChildBComponent } from "./contact/child-b/child-b.component";
import { ContactMainComponent } from "./contact/contact-main/contact-main.component";
import { FormComponent } from "./form/form.component";
import { ActivateGuard } from "./guards/activate.guard";
import { CanLoadGuard } from "./guards/can-load.guard";
import { DeactivateGuard } from "./guards/deactivate.guard";
import { InternationalizationComponent } from "./internationalization/internationalization.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  { path: '', redirectTo: '/homepage', 'pathMatch': 'full' },
  { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(module => module.HomepageModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(module => module.AboutModule) },
  { path: 'my-pipes', loadChildren: () => import('./pipes/pipes.module').then(module => module.PipesModule) },
  {
    path: 'contact',
    // path: 'contact', component: ContactMainComponent,
    loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule),
    // children: [
    //   { path: 'child-a', component: ChildAComponent },
    //   { path: 'child-b', component: ChildBComponent }
    // ],
    // canActivate: [ActivateGuard],
    canDeactivate: [DeactivateGuard],
    // canLoad: [CanLoadGuard],
  },
  { path: 'form', component: FormComponent },
  { path: 'i18n', component: InternationalizationComponent },
  { path: 'reactive-form', loadChildren: () => import('./reactive-form/reactive-form.module').then(module => module.ReactiveFormModule) },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ChildAComponent, ChildBComponent],
  providers: []
})

export class AppRoutingModule { }