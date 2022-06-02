import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ], exports: [
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: []
})
export class MaterialModule { }
