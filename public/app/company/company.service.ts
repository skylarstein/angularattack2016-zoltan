import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Injectable()
export class CompanyService {
    getName(http: Http) {
         http.get('http://www.namemesh.com/domain-name-search/pickle?show=1')
          .subscribe(function(result) {
              console.log(result,'test');
          });
    }
}