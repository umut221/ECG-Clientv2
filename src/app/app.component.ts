import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  currentTime:Date;
  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  title = 'EkgClient';
  
}
