import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "list", component: EmployeeListComponent},
  {path: "add", component: AddEmployeeComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
