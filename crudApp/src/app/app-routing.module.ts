import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { Student } from './student';

const routes: Routes = [
  {path: 'list',component:ListComponent},
  {path: 'details/:id', component:DetailsComponent},
  {path: 'add', component:AddStudentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
