import { Component, OnInit } from '@angular/core';
import{Employee} from '../employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
   
  employee:Employee=new Employee()
   
   
  constructor(private employeeService:EmployeeService,private router:Router) {}

  ngOnInit(): void {}

  onSubmit(){
    this.employeeService.createEmployees(this.employee).subscribe(data=>{
       this.goToEmployees();
    })
  }

  goToEmployees(){
    this.router.navigate(['/employees']);
  }
}



