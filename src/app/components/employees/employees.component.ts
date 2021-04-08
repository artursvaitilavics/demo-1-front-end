import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any = []

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data;
    })
  }

}
