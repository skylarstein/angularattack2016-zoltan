import {Component} from '@angular/core';

// services
import {CompanyService} from './company/company.service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers: [CompanyService]
})
export class AppComponent {
    constructor(private _CompanyService: CompanyService) { },
    getCompanyName() {
        this._CompanyService.getName().then(name => this.name = name);
      }
    ngOnInit() {
        this.getCompanyName();
    }
}