import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeListSubject = new BehaviorSubject<Employee[]>([]);

  constructor(private http: HttpClient) {
    this.reloadEmployees();
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("api/employee");
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>("api/employee", employee);
  }

  deleteEmployee(id:number):Observable<Employee>{
    console.log(id);
    return this.http.delete<Employee>("api/employee/" + id);
  }

  changeQuantity(id: Number, amountChange: Number): Observable<any> {
    return this.http.patch("api/employee/" + id, {"changeInQuantity": amountChange});
  }

  updateEmployeeList(employees: Employee[]) {
    this.employeeListSubject.next(employees);
  }

  getEmployeeListObservable(): Observable<Employee[]> {
    return this.employeeListSubject.asObservable();
  }

  reloadEmployees() {
    this.getEmployees().subscribe({
      next: (employees: Employee[]) => {
        this.updateEmployeeList(employees);
      },
      complete: () => {
        console.log("Finished loading employees in service!");
      }
    });
  }
}
