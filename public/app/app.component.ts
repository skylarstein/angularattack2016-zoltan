import {Component}       from '@angular/core';
import {CompanyService}  from './company/company.service';
import {GiphyService}    from './giphy/giphy.service';
import {YoutubeService}  from './youtube/youtube.service';
import {EmployeeService} from './employee/employee.service';

@Component({
  selector: 'my-app',
  template: '<h1>The App</h1>',
  providers: [CompanyService, GiphyService, YoutubeService, EmployeeService]
})

export class AppComponent {
  constructor(private _CompanyService: CompanyService, private _GiphyService: GiphyService, private _YoutubeService: YoutubeService, private _EmployeeService: EmployeeService) {

  }

  getCompanyName() {
    this._CompanyService.getDomainName().then(function(result: any) {});
  }

  ngOnInit() {
    this.getCompanyName();
  }
}
