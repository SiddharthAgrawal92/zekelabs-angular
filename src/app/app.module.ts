import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ActivateGuard } from './guards/activate.guard';
import { CanLoadGuard } from './guards/can-load.guard';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
// import { MyPipe } from './custom-pipes/my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotfoundComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ActivateGuard, DeactivateGuard, CanLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
