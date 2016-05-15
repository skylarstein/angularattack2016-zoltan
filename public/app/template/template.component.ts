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
  primaryColor: any;
  secondaryColor: any;
  companySuffix: string;
  catchPhrase1: string;
  catchPhrase2: string;
  catchPhrase3: string;
  bs1: string;
  bs2: string;
  bs3: string;
  bsBuzz1: string;
  bsBuzz2: string;
  bsBuzz3: string;
  bsBuzz4: string;
  sentence1: string;
  sentence2: string;
  sentence3: string;
  sentence4: string;
  sentence5: string;
  sentence6: string;
  sentence7: string;
  companies: any[];

  ngOnInit() {
    var self = this;
    this._EmployeeService.getEmployees(3)
      .subscribe(function(response) {
        self.employees = response.json();
      });

    this._CompanyService.getCompany()
      .then(function(response) {
        let companyData    = response.json()[0];
        self.companyName   = companyData.companyName;
        self.companySuffix = companyData.companySuffix;
        self.catchPhrase1   = companyData.catchPhrase;
        self.bs1            = companyData.bs;
        self.bsBuzz1        = companyData.bsBuzz;
        self.primaryColor = ['#318dbc', '#fc4538', '#1469aa', '#fb8c18',  '#0e427f', '#5ac2cb', '#7ecca8', '#fed200','#cdeac6', '#febb60'][Math.floor(Math.random() * 10)]
        self.secondaryColor = ['#9b78ce', '#fecf60', '#9ee2fa', '#44b44e', '#b1248e', '#04aae4', '#e48134', '#abcb76', '#ed4a3c', '#ec008c'][Math.floor(Math.random() * 10)]
      });

    this._CompanyService.getCompany()
      .then(function(response) {
        let companyData = response.json()[0];
        self.bs2 = companyData.bs;
        self.bsBuzz2 = companyData.bsBuzz;
        self.catchPhrase2 = companyData.catchPhrase;
      });

    this._CompanyService.getCompany()
      .then(function(response) {
        let companyData = response.json()[0];
        self.bs3 = companyData.bs;
        self.bsBuzz3 = companyData.bsBuzz;
        self.catchPhrase3 = companyData.catchPhrase;
      });
    this._CompanyService.getCompany()
      .then(function(response) {
        let companyData = response.json()[0];
        self.bs3 = companyData.bs;
        self.bsBuzz3 = companyData.bsBuzz;
        self.catchPhrase3 = companyData.catchPhrase;
      });
    this._CompanyService.getSentences().then(function(response) {
        self.sentence1 = response.json()[0];
        self.sentence2 = response.json()[1];
        self.sentence3 = response.json()[2];
        self.sentence4 = response.json()[3];
        self.sentence5 = response.json()[4];
        self.sentence6 = response.json()[5];
        self.sentence7 = response.json()[6];
    });
  }
}

