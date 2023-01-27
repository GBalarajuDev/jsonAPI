import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student:Student= new Student();

  constructor(private service:StudentService, private router:Router){}
  onSubmit(){
      this.service.addStudent(this.student).subscribe(x=>console.log(x));
      alert("Data Submitted Successfully")
      this.router.navigate(['list'])
  }

}
