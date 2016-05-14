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
    getCompanyName() {
        this._CompanyService.getName();
      }
    ngOnInit() {
        this.getCompanyName();
    }
}