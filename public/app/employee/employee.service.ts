import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }

  getEmployees(count: number) {
    return this.http.get('https://team-zoltan.herokuapp.com/random/employees/' + count);
  }
}
