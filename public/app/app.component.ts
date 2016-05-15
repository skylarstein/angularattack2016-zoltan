import {Component}       from '@angular/core';

import {CompanyService}  from './company/company.service';
import {GiphyService}    from './giphy/giphy.service';
import {YoutubeService}  from './youtube/youtube.service';
import {EmployeeService} from './employee/employee.service';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<site-template></site-template>',
  providers: []
})

export class AppComponent {
  constructor() {

  }
}