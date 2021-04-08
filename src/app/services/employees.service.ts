import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseUrl: string = 'http://localhost:8080/';
  employeesUrl: string = 'employees';

  constructor(private httpClient: HttpClient) {}

  public getEmployees(pageSize:number, pageNumber: number) {
    return this.httpClient.get(`${this.baseUrl}${this.employeesUrl}?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }
}



// http://localhost:8080/employees?pageSize=7&pageNumber=50