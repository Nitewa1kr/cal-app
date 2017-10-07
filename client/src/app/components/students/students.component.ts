import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
//locations services
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/students';
//Seats services

import { ScheduleModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DropdownModule, SelectItem } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { Observable } from "rxjs/Rx";


@Component({
  moduleId: module.id,
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  //Location
  students: any[];
  student: Student;

  header: any;
  
  selectedValue: string;
  
  dialogVisible: boolean = false;
  
  MorningSeats;
  AfternoonSeats;
  EveningSeats;
  

  
  constructor(private studentService:StudentService, private cd: ChangeDetectorRef ) 
  {
    
  }

  ngOnInit(){

    //location
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      console.log(students);
    });
    
    
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay',
      default: 'false'
    };
  }
  
  handleDayClick(event){
    this.student = new Student();
    this.student.start = event.date;
    this.dialogVisible = true;
    this.cd.detectChanges();
  }
  handleEventClick(event){
    this.student = new Student();
    console.log(this.student);
    this.student._id = event.calEvent._id;
    this.student.title = event.calEvent.title;
    this.student.email = event.calEvent.email;
    this.student.event = event.calEvent.event;
    this.student.time = event.calEvent.time;
    this.dialogVisible = true;
  }

  saveEvent()
  {
    
      this.student.time = this.selectedValue;
      this.studentService.addStudent(this.student).subscribe(student => {
        this.students.push(student);
        console.log(student);
      });
      this.studentService.getStudents().subscribe(students => {
        this.students = students;
        console.log(students, ' remaining students' );
      });
    
    this.selectedValue = '';
    this.dialogVisible = false;
  }

  deleteEvent(_id: any){
      
      this.studentService.deleteStudent(_id).subscribe(res => 
      {
        console.log(_id, ' this student was being selected');
        if(this.student._id === _id)
        {
          this.students.splice(this.student._id,1);
        }
        console.log(this.student._id,' this student was deleted ');
      });
    
    
    this.studentService.getStudents().subscribe(students => {
        this.students = students;
        console.log(students, ' remaining students' );
      });
    this.dialogVisible = false;
  }      
}