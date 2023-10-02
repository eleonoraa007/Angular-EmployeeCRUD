import { ChangeLeaves } from './../model/employee-change-leaves';
import { EmployeeService } from './../services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from './../model/employee';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployeeListObservable();
  }

  onChangeQuantity(pc: ChangeLeaves) {
    this.employeeService.changeQuantity(pc.employee.id, pc.amountChange).subscribe({
      next: (msg) => {
        console.log(msg);
        this.employeeService.reloadEmployees();
      },
      error: (msg) => {
        console.log(msg);
      }
    })
  }
}
