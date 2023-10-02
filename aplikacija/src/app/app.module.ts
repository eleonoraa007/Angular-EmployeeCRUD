import { EmployeeComponent } from './employee/employee.component';
import { AppRoutesModule } from './app-routes.module';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
