import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
//Location Services
import { StudentService } from './services/student.service';


import { ScheduleModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';



@NgModule({
  declarations: [ AppComponent, StudentsComponent ],
  imports: [  BrowserModule, BrowserAnimationsModule, 
              HttpModule, FormsModule,
              ScheduleModule, DialogModule, 
              InputTextModule, ButtonModule,
              DropdownModule, RadioButtonModule ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
