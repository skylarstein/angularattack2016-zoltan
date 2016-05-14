import {Component} from '@angular/core';

// services
import {CompanyService} from './company/company.service';

@Component({
    selector: 'my-app',
    template: '<h1>The ' + faker.random.word() + ' ' + faker.random.word() + ' App</h1>',
    providers: [CompanyService]
})
export class AppComponent {
    constructor(private _CompanyService: CompanyService) { }
    getCompanyName(word1,word2) {
        this._CompanyService.getName(word1,word2);
      }
    ngOnInit() {
        var word1 = faker.random.word();
        var word2 = faker.random.word();
        this.getCompanyName(word1, word2);
    }
}