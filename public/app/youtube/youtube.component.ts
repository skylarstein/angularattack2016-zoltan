import {Component} from '@angular/core';
import {YoutubeService} from "./youtube.service";
import {Youtube} from './youtube.model';

@Component({
  selector: 'youtube-thumbnail',
  template: `<img src="{{src}}"/>`,
  providers: [YoutubeService]
})

export class YoutubeComponent {
  constructor(private _YoutubeService: YoutubeService) {};
  // youtube: Youtube;
  src: string;
  ngOnInit() {
    var self = this;
    this._YoutubeService.getVideo()
      .then(function(response) {

        // var url: string = giphy['images']['original']['url'];
        // self.giphy = { src: url};
        // self.src = url;
        var url = response.json().items[0].snippet.thumbnails.high.url;
        //console.log('>>> RANDOM YOUTUBE DATA', url );
        return self.src = url;
      });
  }
}