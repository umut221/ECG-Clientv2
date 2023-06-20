import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular-highcharts';



@NgModule({
  declarations: [
    PatientsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:PatientsComponent},
    ]),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartModule

  ]
})
export class PatientsModule { }
