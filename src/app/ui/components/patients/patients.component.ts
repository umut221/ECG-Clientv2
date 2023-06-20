import { CustomToastrService, ToastrMessageType } from './../../../services/common/custom-toastr.service';
import { List_Patient } from './../../../contracts/list_patient';
import { PatientService } from 'src/app/services/common/models/patient.service';
import { Component, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SocketService } from 'src/app/services/common/socket.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  data: number[] = [];
  constructor(private patientService: PatientService, private toastr: CustomToastrService, private socketService: SocketService) {
  }

  patients: List_Patient[] = [];
  chartOptions: any;
  pause: boolean = false;
  buttonsShow: boolean = false;
  patientName: string = "";
  bpm: number = 0;
  breathingrate: number = 0;
  hr_mad: number = 0;
  ibi:number = 0;
  pnn20: number = 0;
  pnn50: number = 0;
  rmssd: number = 0;
  s: number = 0;
  sd1: number = 0;
  sd2: number = 0;
  sdnn: number = 0;
  sdsd: number = 0;

  async ngOnInit() {


    await this.patientService.read(() => this.toastr.message("Hastalar Başarıyla listelendi", "Bilgilendirme", ToastrMessageType.Success)).then(response => {
      this.patients = response.patients;
    });
  }

  drawChart(patientName?) {
    if (patientName) this.patientName = patientName;
    this.buttonsShow = true;
    this.pause = false;
    this.socketService.listen('analyzeData').subscribe((data: any) => {
      const jsonData = JSON.parse(data);
      this.bpm = jsonData.bpm;
      this.breathingrate = jsonData.breathingrate;
      this.hr_mad = jsonData.hr_mad
      this.ibi = jsonData.ibi;
      this.pnn20 = jsonData.pnn20;
      this.pnn50 = jsonData.pnn50;
      this.rmssd = jsonData.rmssd;
      this.s = jsonData.s;
      this.sd1 = jsonData.sd1;
      this.sd2 = jsonData.sd2;
      this.sdnn = jsonData.sdnn;
      this.sdsd = jsonData.sdsd;
    })
    this.socketService.listen('dataUpdate').subscribe((data: any) => {
      this.data = data;
      let times: any[] = [];
      this.chartOptions = {
        title: {
          text:`${this.patientName} İsimli Hastanın EKG verileri`,     
          style: {
            color: '#fff'
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            type: "spline",
            lineWidth: 0.5,
            data: this.data,
            name: 'EKG',
          }
        ],
        chart: {
          events: {
            load: () => { }
          },
          zoomType: "x",
          backgroundColor: '#4c4c4c',
        },
        xAxis: {
          values: times
        },
        yAxis: {
          title: null,
        },
        plotOptions: {
          series: {
              color: '#48e800'
          }
      },
      }
      Highcharts.chart("container", this.chartOptions);
    });
  }

  pauseData() {
    this.socketService.stop('dataUpdate');
    this.socketService.stop('analyzeData');
    this.pause = true;
  }

}