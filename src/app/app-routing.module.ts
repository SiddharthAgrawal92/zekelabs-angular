import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about/about.component";
import AppComponent from "./app.component";
import { ChildAComponent } from "./contact/child-a/child-a.component";
import { ChildBComponent } from "./contact/child-b/child-b.component";
import { ContactComponent } from "./contact/contact/contact.component";
import { CanloadGuard } from "./guards/canload.guard";
import { DeactivateGuard } from "./guards/deactivate.guard";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    {
        path: 'contact',
        // canLoad: [CanloadGuard],
        canDeactivate: [DeactivateGuard],
        // component: ContactComponent,
        loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule),
        // children: [
        //     { path: 'child-a', component: ChildAComponent },
        //     { path: 'child-b', component: ChildBComponent },
        // ]
    },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotfoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [AboutComponent]
})
export class AppRoutingModule { }