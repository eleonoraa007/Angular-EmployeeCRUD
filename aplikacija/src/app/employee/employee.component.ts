import { ChangeLeaves } from './../model/employee-change-leaves';
import { EmployeeService } from './../services/employee.service';
import { Employee } from './../model/employee';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;

  @Output() changeQuantity: EventEmitter<ChangeLeaves>;

  constructor(private employeeService: EmployeeService) {
    this.changeQuantity = new EventEmitter<ChangeLeaves>();
  };

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.employeeService.reloadEmployees();
      }
    });
  }

  increaseQuantity(){
    this.changeQuantity.emit({employee: this.employee, amountChange: 1});
  }
  
  decreaseQuantity(){
    this.changeQuantity.emit({employee: this.employee, amountChange: -1});
  }
}
