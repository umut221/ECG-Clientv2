import { ToastrModule } from 'ngx-toastr';
import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    UiModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
    {provide: "baseUrl", useValue: "http://localhost:3000", multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
