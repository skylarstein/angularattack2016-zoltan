import {Component} from '@angular/core';
import {EmployeeService} from '../employee/employee.service';
import {Employee} from '../employee/employee.model';
import {EmployeeComponent} from '../employee/employee.component';

@Component({
  selector: 'site-template',
  templateUrl: 'app/template/startbootstrap-agency-1.0.6/index.html',
  providers: [EmployeeService],
  directives: [EmployeeComponent]
})

export class TemplateComponent {
  constructor(private _EmployeeService: EmployeeService) { };
  employees: Employee[];

  ngOnInit() {
    var self = this;
    this._EmployeeService.getEmployees(3)
      .subscribe(function(response) {
        self.employees = response.json();
      });
  }
}
