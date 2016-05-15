import {Component} from '@angular/core';
import {EmployeeService} from '../employee/employee.service';

@Component({
  selector: 'site-template',
  templateUrl: 'app/template/startbootstrap-agency-1.0.6/index.html',
  providers: [EmployeeService]
})

export class TemplateComponent {
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