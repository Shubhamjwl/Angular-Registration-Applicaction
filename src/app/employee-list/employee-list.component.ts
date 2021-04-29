import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Employee} from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];
  message: String='';
  firstName;
  surName;
  pincode;
  sortDoj;
  sortDob;
  flag:boolean;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  
   getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees=data,
      console.log(this.employees)
      error=>{
        this.employees=[];
        console.log(error);
      }
    })
  }

  deleteEmployee(id:number){

    this.employeeService.deleteEmployee(id)
    .subscribe(data=>{
      this.message=data;
      this.getEmployees();
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['edit',id]);
  }

  searchByFirstName(){
    this.employeeService.searchByFirstName(this.firstName)
    .subscribe(data=>{
      this.employees=data;
    })
  }
  searchBySurName(){
    this.employeeService.searchBySurName(this.surName)
    .subscribe(data=>{
      this.employees=data;
    })
  }
  searchByPincode(){
     this.employeeService.searchByPincode(this.pincode)
     .subscribe(data=>{
       this.employees=data;
     })
  }

  sortByDob(){
    if(this.sortDob=='asc'){
      this.flag=true;
    }
    if(this.sortDob=='desc'){
      this.flag=false
    }
    this.employeeService.sortByDob(this.flag)
    .subscribe(data=>{
      this.employees=data;
    })
  }
  sortByDoj(){
    if(this.sortDoj=='asc'){
      this.flag=true;
    }
    if(this.sortDoj=='desc'){
      this.flag=false
    }
    this.employeeService.sortByDoj(this.flag)
    .subscribe(data=>{
      this.employees=data;
    })
  }

}
