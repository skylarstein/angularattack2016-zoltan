import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

class Employee {
  name: string;
  jobTitle: string;
  avatarUrl: string;
 
  constructor() { }
  //toString(): string { }
}

@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }
  getEmployee() {
    return this.http.get('random/employee');
  }
}


/*
    this.http.get('random/employee')
      .subscribe(function(result) {
        console.log('>>>>>>' + JSON.stringify(result));

        var employee = new Employee();

        employee.name = 'Joe Blow';
        employee.jobTitle = 'Software Guy';
        employee.avatarUrl = 'http://my.image.com/hello.png';

        console.log(employee);
        return employee;
    });
*/