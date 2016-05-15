import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class YoutubeService {
  constructor(private http: Http) { }

  getVideo(query: string) {
    //var queryString : string = query.split(' ').join('+');
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCdV-UnMPg6YImlEsfpqCbc4WNZUyksNn8&part=snippet,contentDetails,statistics,status');
    //https://www.googleapis.com/youtube/v3/search?type=video&part=snippet,statistics&q=kittens&key={MY_KEY}
    //In the guide, they specify "the part names that you can include in the parameter value are id and snippet" when using https://www.googleapis.com/youtube/v3/search. (statistics is not an accepted value).

  }
}