import { Observable, firstValueFrom } from 'rxjs';
import { List_Patient } from './../../../contracts/list_patient';
import { Create_Patient } from './../../../contracts/create_patient';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { patientResponse } from 'src/app/contracts/patient_response';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClientService: HttpClientService) { }

  create(patient: Create_Patient, successCallBack?: any, errorCallBack?: any) {
    this.httpClientService.post({
      controller: "patients"
    }, patient)
      .subscribe(result => {
        successCallBack();
      }, (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`
          });
        });
        errorCallBack(message);
      });
  }


  async read(successCallBack?: any , errorCallBack?: any): Promise<patientResponse> {
    const promiseData: Promise<patientResponse> = this.httpClientService.get<patientResponse>({
      controller: "patients",
      action:"getall",
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));
    return await promiseData;
  }

  async getById(id:string){
    const observable: Observable<List_Patient> = this.httpClientService.get<List_Patient>({
      controller: "patients",
      queryString:`id=${id}`
    });
    return await firstValueFrom(observable);
  }
}
