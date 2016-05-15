import {Injectable} from '@angular/core';

import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CompanyService {
    constructor(private http: Http) { }
    getName() {
        return this.http.get('/random/words/2').toPromise();
    }
    getDomainName() {
        var httpService = this.http;
        return this.getName().then(function(result : any) {
            result = result.json();
            if (result.words) {
                console.log('http://www.namemesh.com/domain-name-search/'+ result.words[0] + result.words[1] + '?show=1');
                return httpService.get('http-get-proxy/' + encodeURIComponent('http://www.namemesh.com/domain-name-search/'+ result.words[0] + result.words[1] + '?show=1')).toPromise();
            }
        });
    }
}
