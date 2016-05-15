import {Component}         from '@angular/core';
import {CompanyService}    from '../company/company.service';
import {EmployeeComponent} from '../employee/employee.component';
import {EmployeeService}   from '../employee/employee.service';
import {Employee}          from '../employee/employee.model';


@Component({
  selector: 'site-template',
  templateUrl: 'app/template/startbootstrap-agency-1.0.6/index.html',
  directives: [EmployeeComponent],
  providers: [EmployeeService, CompanyService]
})

export class TemplateComponent {
  constructor(private _EmployeeService: EmployeeService, private _CompanyService: CompanyService) {};
  employees: Employee[];
  companyName: string;
  companySuffix: string;
  catchPhrase: string;
  bs: string;
  bsBuzz: string;

  ngOnInit() {
    var self = this;
    this._EmployeeService.getEmployees(3)
      .subscribe(function(response) {
        self.employees = response.json();
      });

    this._CompanyService.getCompany()
      .then(function(response) {
        let companyData    = response.json();
        console.log(companyData)
        self.companyName   = companyData.companyName;
        self.companySuffix = companyData.companySuffix;
        self.catchPhrase   = companyData.catchPhrase;
        self.bs            = companyData.bs;
        self.bsBuzz        = companyData.bsBuzz;
        self.primaryColor = ['red', 'green', 'blue', 'orange', 'yellow'][Math.floor(Math.random() * 5)]
      });
  }
}

