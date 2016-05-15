import {Component} from '@angular/core';

// services
import {CompanyService} from './company/company.service';
import { GiphyService } from './giphy/giphy.service';
import { YoutubeService } from './youtube/youtube.service';
import {EmployeeService} from './employee/employee.service';

@Component({
    selector: 'my-app',
    template: '<h1>The App</h1>',
    providers: [CompanyService, GiphyService, YoutubeService, EmployeeService]
})
export class AppComponent {
    constructor(private _CompanyService: CompanyService, private _GiphyService: GiphyService, private _YoutubeService: YoutubeService, private _EmployeeService: EmployeeService) { }
    getCompanyName() {
        this._CompanyService.getDomainName().then(function(result: any) {
            console.log(JSON.stringify(result._body),'test');
         });
    }
    getGiphy(phrase: string) {
        this._GiphyService.getImgUrl(phrase);
    }
    getVideo() {
      this._YoutubeService.getVideo().then(function(result) {
        console.log('>>> RANDOM YOUTUBE DATA', result.json());
      });
    }
    getEmployee() {
        this._EmployeeService.getEmployee().subscribe(function(result) {
            console.log('>>> RANDOM EMPLOYEE DATA', result.json());
        });
    }
    ngOnInit() {
        this.getCompanyName();
        this.getGiphy('picard wtf');
        this.getCompanyName();
        this.getVideo();
        this.getEmployee();
    }
}
