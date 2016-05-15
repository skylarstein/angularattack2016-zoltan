import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class GiphyService {
  constructor(private http: Http) { }

  getImgUrl(query: string) {
    var queryString : string = query.split(' ').join('+');
    return this.http.get('http://api.giphy.com/v1/gifs/search?q=' + queryString + '&api_key=dc6zaTOxFJmzC ')
      .subscribe(function(result) {
        console.log(result, 'test');
      });
  }
}
