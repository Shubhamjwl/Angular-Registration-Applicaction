import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path:'add',component: CreateEmployeeComponent},
  {path:'edit/:id',component: EmployeeEditComponent},
  {path:'delete/:id',component: CreateEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
