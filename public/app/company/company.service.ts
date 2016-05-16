import {Injectable} from '@angular/core';

import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CompanyService {
  constructor(private http: Http) { }

  getName() {
    return this.http.get('https://team-zoltan.herokuapp.com/random/words/2').toPromise();
  }

  getCompany() {
    return this.http.get('https://team-zoltan.herokuapp.com/random/company/10').toPromise();
  }

  getSentences() {
    return this.http.get('https://team-zoltan.herokuapp.com/random/sentences/10').toPromise();
  }
}
