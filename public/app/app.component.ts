import {Component} from '@angular/core';

// services
import {CompanyService} from './company/company.service';
import { GiphyService } from './components/giphy.service';

@Component({
  selector: 'my-app',
  template: '<h1>The App</h1>',
  providers: [CompanyService, GiphyService]
})
export class AppComponent {
  constructor(private _CompanyService: CompanyService, private _GiphyService: GiphyService) { }
    getCompanyName(word1: string, word2: string) {
      this._CompanyService.getName(word1,word2);
    }
    getGiphy(phrase: string) {
      this._GiphyService.getImgUrl(phrase);
    }
    ngOnInit() {
      var word1 = 'yo'; //faker.random.word();
      var word2 = 'dawg';//faker.random.word();
      this.getCompanyName(word1, word2);
      this.getGiphy('picard wtf');
    }
}
