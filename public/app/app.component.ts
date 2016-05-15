import {Component}       from '@angular/core';
import {CompanyService}  from './company/company.service';
import {GiphyService}    from './giphy/giphy.service';
import {YoutubeService}  from './youtube/youtube.service';
import {EmployeeService} from './employee/employee.service';

import {Http, HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<button id="save" class="button" (click)=save()>Save your Random Template</button><site-template></site-template>',
  providers: []
})

export class AppComponent {
  constructor(private http: Http) {

  }
  save() {
      var id = Math.floor(Math.random() * (99999999999999999 - 1)) + 1;
      var body = JSON.stringify({blob: JSON.stringify(document.body.innerHTML)});
      this.http.put( '/blob/' + id.toString(), body, {headers: {'Content-Type': 'application/json'}}).subscribe(function() {
          console.log('saved id:', id);
      });
  }
})
