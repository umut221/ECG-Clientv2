import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    LayoutComponent
  ],

})
export class LayoutModule { }
