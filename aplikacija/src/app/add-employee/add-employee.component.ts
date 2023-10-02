import { Employee } from './../model/employee';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './../services/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  public message='';
  constructor(private employeeService: EmployeeService) {}

  addEmployee(employeeForm: NgForm) {
    if(employeeForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const employee: Employee = employeeForm.value.employee;
      console.log('Adding employee', employee);
      this.employeeService.addEmployee(employee).subscribe({
        next: () => {
          this.employeeService.reloadEmployees();
        }
      });
    }
  }
}
