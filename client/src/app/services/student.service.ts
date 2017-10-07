import { Student } from '../interfaces/Students';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class StudentService {
  
  constructor(public http:Http) {}
  
  getStudents()
  {
    return this.http.get('/api/students')
    .map(res => res.json());
  }

  addStudent(student)
  {
    return this.http.post('/api/students/',student)
    .map(res => res.json());
  }
  
  deleteStudent(_id)
  {
    return this.http.delete('/api/students/'+_id)
    .map(res => res.json());
  }
  updateStudent(student)
  {
    return this.http.put('/api/students/'+ student._id, student)
    .map(res => res.json());
  }
}
