import {Component}       from '@angular/core';

import {CompanyService}  from './company/company.service';
import {GiphyService}    from './giphy/giphy.service';
import {YoutubeService}  from './youtube/youtube.service';
import {EmployeeService} from './employee/employee.service';
//import { ROUTER_PROVIDERS } from '@angular/router';

import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<button id="save" class="button" (click)=save()>Save your Random Template</button><site-template></site-template>',
  providers: []
})
@Routes([
    {path: '/', component: AppComponent},
    {path: '/:id', component: AppComponent}
])

export class AppComponent {
  constructor(private http: Http) {

  }

  save() {
    var id = Math.floor(Math.random() * (99999999999999999 - 1)) + 1;
    var body = JSON.stringify({blob: JSON.stringify(document.body.innerHTML)});
    this.http.put( '/blob/' + id.toString(), body).subscribe(function() {
      console.log('saved id:', id);
    });
  }
}
