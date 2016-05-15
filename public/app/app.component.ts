import {Component} from '@angular/core';

// services
import {CompanyService} from './company/company.service';
import { GiphyService } from './components/giphy.service';
import {EmployeeService} from './employee/employee.service';

@Component({
  selector: 'my-app',
  template: '<h1>The App</h1>',
  providers: [CompanyService, GiphyService, EmployeeService]
})
export class AppComponent {
  constructor(private _CompanyService: CompanyService, private _GiphyService: GiphyService, private _EmployeeService: EmployeeService) { }
    getCompanyName(word1: string, word2: string) {
      this._CompanyService.getName(word1,word2);
    }
    getGiphy(phrase: string) {
      this._GiphyService.getImgUrl(phrase);
    }
    getEmployee() {
      this._EmployeeService.getEmployee().subscribe(function(result) {
        console.log('>>> RANDOM EMPLOYEE DATA', result.json());
      });
    }
    ngOnInit() {
      var word1 = 'yo'; //faker.random.word();
      var word2 = 'dawg';//faker.random.word();
      this.getCompanyName(word1, word2);
      this.getGiphy('picard wtf');
      this.getEmployee();
    }
}
