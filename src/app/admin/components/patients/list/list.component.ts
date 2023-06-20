import { List_Patient } from './../../../../contracts/list_patient';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './../../../../services/common/custom-toastr.service';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/common/models/patient.service';
import { MatTableDataSource } from '@angular/material/table';
import { patientResponse } from 'src/app/contracts/patient_response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private patientService:PatientService, private toastr:CustomToastrService) { }

  displayedColumns: string[] = ['name', 'age', 'gender'];

  dataSource: MatTableDataSource<List_Patient>= null;

  async ngOnInit() {
    await this.getPatients();
  }

  async getPatients() : Promise<void>{
    const patientResponse:patientResponse= await this.patientService.read(() => this.toastr.message("Hastalar başarıyla listelendi", "Bilgilendirme", ToastrMessageType.Success, ToastrPosition.TopRight) , () =>
     this.toastr.message("Hastalar listelenirken bir hata ile karşılaşıldı", "Uyarı!!", ToastrMessageType.Error, ToastrPosition.TopRight));
     const allPatients = patientResponse.patients;
    this.dataSource = new MatTableDataSource<List_Patient>(allPatients);
  }

}
