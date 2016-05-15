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
  ngOnInit() {
    var self = this;
    this._EmployeeService.getEmployee()
      .subscribe(function(response) {
        let employeeData = response.json();
        self.imageUrl = employeeData.imageUrl;
        self.name = employeeData.name;
        self.jobTitle = employeeData.jobTitle;
        self.wordsOfWisdom = employeeData.wordsOfWisdom;
      });
  }
}
