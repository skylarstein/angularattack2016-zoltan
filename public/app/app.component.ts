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
    getCompanyName() {
        this._CompanyService.getName();
      }
    getGiphy(phrase: string) {
      this._GiphyService.getImgUrl(phrase);
    }
    ngOnInit() {
        this.getCompanyName();
        this.getGiphy('picard wtf');
    }
}
