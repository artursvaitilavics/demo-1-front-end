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

  public getEmployees() {
    return this.httpClient.get(`${this.baseUrl}${this.employeesUrl}`);
  }
}
