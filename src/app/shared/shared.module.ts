import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetSize, MyPipe } from '../custom-pipes/my.pipe';



@NgModule({
  declarations: [MyPipe, GetSize],
  imports: [
    CommonModule
  ],
  exports: [MyPipe, GetSize],
  providers: [GetSize]
})
export class SharedModule { }
