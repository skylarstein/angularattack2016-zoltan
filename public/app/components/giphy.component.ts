import {Component} from '@angular/core'
import {GiphyService} from "./giphy.service";
import {Giphy} from '../models/giphy';

@Component({
  selector: 'giphy-img',
  template: `<img src="{{giphy.src}}"/>`,
  providers: [GiphyService]
})

export class GiphyComponent {
  constructor(private _GiphyService: GiphyService) {};
  giphy: Giphy;
  ngOnInit() {
    this._GiphyService.getImgUrl('picard wtf')
      .subscribe(function(response) {
        var giphys: string[] = response.json().data;
        var randIndex: number = Math.round(Math.random() * (giphys.length - 1));
        var giphy: Object = giphys[randIndex];
        var url: string = giphy['url'];
        this.giphy = { src: url};
        console.log(url);
        this.src = url;
      });
  }
}
