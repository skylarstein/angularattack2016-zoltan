import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {GiphyComponent} from './giphy/giphy.component';
import {EmployeeComponent} from './employee/employee.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
bootstrap(GiphyComponent, [HTTP_PROVIDERS]);
bootstrap(EmployeeComponent, [HTTP_PROVIDERS]);
