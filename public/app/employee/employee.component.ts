import {Component} from '@angular/core'
import {EmployeeService} from "./employee.service";
import {Employee} from './employee.model';

@Component({
  selector: 'employee',
  template: `<img src="{{imageUrl}}"/><br>{{name}}<br>{{jobTitle}}<br>Words of wisdom: "{{wordsOfWisdom}}"`,
  providers: [EmployeeService]
})

export class EmployeeComponent {
  constructor(private _EmployeeService: EmployeeService) { };
  name: string;
  jobTitle: string;
  imageUrl: string;
  wordsOfWisdom: string;
  employees: Employee[];

  ngOnInit() {
    var self = this;
    this._EmployeeService.getEmployees(2)
      .subscribe(function(response) {
        self.employees = response.json();
        console.log('Got employees: ' + JSON.stringify(self.employees, null, 2));
        self.imageUrl = self.employees[0].imageUrl;
        self.name = self.employees[0].name;
        self.jobTitle = self.employees[0].jobTitle;
        self.wordsOfWisdom = self.employees[0].wordsOfWisdom;
      });
  }
}
