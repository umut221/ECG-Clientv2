import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  exports: [
    LayoutModule,
  ]
})
export class AdminModule { }
