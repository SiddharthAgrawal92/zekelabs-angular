import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHttpInterceptor } from './api-http-interceptor';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotfoundComponent,
    FormComponent,
    InternationalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ActivateGuard, DeactivateGuard, CanLoadGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'hi' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
