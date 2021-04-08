import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any = [];

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    personalId: '',
    email: '',
  };

  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService
      .getEmployees(this.pageSize, this.pageNumber)
      .subscribe((data) => {
        console.log(data);
        this.employees = data;
      });
  }

  setEmployee(
    id: number,
    firstName: string,
    lastName: string,
    personalId: string,
    email: string
  ) {
    this.employee.id = id;
    this.employee.firstName = firstName;
    this.employee.lastName = lastName;
    this.employee.personalId = personalId;
    this.employee.email = email;

    console.log(this.employee);
  }

  increasePage() {
    this.pageNumber = this.pageNumber + 1;
    this.refreshTable();
  }

  decreasePage() {
    if (this.pageNumber > 0) {
      this.pageNumber = this.pageNumber - 1;
    }
    this.refreshTable();
  }

  refreshTable() {
    this.employeesService
      .getEmployees(this.pageSize, this.pageNumber)
      .subscribe((data) => {
        console.log(data);
        this.employees = data;
      });
  }
}
