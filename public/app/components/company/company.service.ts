import {Injectable} from 'angular2/core';

@Injectable()
export class CompanyService {
    getName() {
         http.get('http://www.namemesh.com/domain-name-search/pickle?show=1')
          .subscribe(function(result) {
              console.log(result);
          });
    }
}