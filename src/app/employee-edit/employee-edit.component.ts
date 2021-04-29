import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{Employee} from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  id:number;
  employee:Employee=new Employee()


  constructor(private router:Router,private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']

    this.employeeService.getEmployeeById(this.id)
    .subscribe(data=>{
      this.employee=data
    },
    error=>{
      console.log(error)
    }
    )
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.employee).subscribe(data=>{
    this.goToEmployees();
    },
    error=>{
      console.log(error)
    }
    )
  }

  goToEmployees(){
    this.router.navigate(['/employees']);
  }





}
