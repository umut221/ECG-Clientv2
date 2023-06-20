import { Create_Patient } from './../../../contracts/create_patient';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
