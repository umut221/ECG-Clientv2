import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from 'src/app/admin/components/patients/patients.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    PatientsComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:PatientsComponent}
    ]),
    MatTableModule,
    MatButtonModule
  ]
})
export class PatientsModule { }
