import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }

  getEmployee() {
    return this.http.get('random/employee');
  }
}
