import {Injectable} from '@angular/core';

import {Http, HTTP_PROVIDERS} from '@angular/http';

@Injectable()
export class CompanyService {
    constructor(private http: Http) { }
    getName() {
        var httpService = this.http;
        httpService.get('/random/words/2').subscribe(function(result : any) {
            result = result.json();
            if (result.words) {
                console.log('http://www.namemesh.com/domain-name-search/'+ result.words[0] + result.words[1] + '?show=1');
                return httpService.get('http-get-proxy/' + encodeURIComponent('http://www.namemesh.com/domain-name-search/'+ result.words[0] + result.words[1] + '?show=1'))
                  .subscribe(function(result: any) {
                      console.log(JSON.stringify(result),'test');
                  });
            }
        })
    }
}
