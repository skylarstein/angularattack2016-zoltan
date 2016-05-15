import {Component} from '@angular/core';

// services
import {CompanyService} from './company/company.service';

@Component({
    selector: 'my-app',
    template: '<h1>The App</h1>',
    providers: [CompanyService]
})
export class AppComponent {
    constructor(private _CompanyService: CompanyService) { }
    getCompanyName(word1:string,word2:string) {
        this._CompanyService.getName(word1,word2);
      }
    ngOnInit() {
        var word1:string = 'test'; //faker.random.word();
        var word2:string = 'test2'; //faker.random.word();
        this.getCompanyName(word1, word2);
    }
}