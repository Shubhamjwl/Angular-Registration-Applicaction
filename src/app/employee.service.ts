import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import{Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl="http://localhost:9090/employee"

  constructor(private httpClient: HttpClient) {  }

  getEmployeesList(): Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseUrl}/allEmployee`);
  }
  createEmployees(employee:Employee): Observable<any>{

    return this.httpClient.post(`${this.baseUrl}/save`,employee,{responseType:'text'});
  }

  deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`,{responseType:'text'});
  }

  getEmployeeById(id:number){
    return this.httpClient.get<Employee>(`${this.baseUrl}/getOneEmployee/${id}`);
  }
  
  updateEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update`,employee)
  }
  searchByFirstName(firstName:String):Observable<any>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/getByFirstName/${firstName}`)
  }
  searchBySurName(surName:String):Observable<any>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/getBySurName/${surName}`)
  }
  searchByPincode(pincode:number):Observable<any>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/getByPincode/${pincode}`)
  }

  sortByDob(asc:boolean):Observable<any>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/sortByDob/${asc}`)

  }
  sortByDoj(asc:boolean):Observable<any>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/sortByDoj/${asc}`)

  }
}
