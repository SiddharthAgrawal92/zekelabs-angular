import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component';
import { HelloComponent } from './hello.component';
import { CustomComponent } from './custom/my-custom';
import { ButtonClickDirective } from './button-click.directive';
import { ServerService } from './services/server.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomComponent,
    ButtonClickDirective,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotfoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
