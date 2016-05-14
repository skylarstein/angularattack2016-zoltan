import {Injectable} from '@angular/core';

import {Http, HTTP_PROVIDERS} from '@angular/http';

@Injectable()
export class CompanyService {
    constructor(private http: Http) { }
    getName() {
         this.http.get('http://say-something-smart.herokuapp.com')
          .subscribe(function(result) {
              console.log(result,'test');
          });
    }
}