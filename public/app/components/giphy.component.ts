import {Component} from '@angular/core'
import {GiphyService} from "./giphy.service";
import {Giphy} from '../models/giphy';

@Component({
  selector: 'giphy-img',
  template: `<img src="{{src}}"/>`,
  providers: [GiphyService]
})

export class GiphyComponent {
  constructor(private _GiphyService: GiphyService) {};
  giphy: Giphy;
  src: string;
  ngOnInit() {
    var self = this;
    this._GiphyService.getImgUrl('picard wtf')
      .subscribe(function(response) {
        var giphys: string[] = response.json().data;
        var randIndex: number = Math.round(Math.random() * (giphys.length - 1));
        var giphy: Object = giphys[randIndex];
        console.log(giphy);
        var url: string = giphy['images']['original']['url'];
        self.giphy = { src: url};
        self.src = url;
        console.log(url);
      });
  }
}
