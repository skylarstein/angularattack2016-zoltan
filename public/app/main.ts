import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {TemplateComponent} from './template/template.component';
import {enableProdMode} from '@angular/core';

enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS]);
bootstrap(TemplateComponent, [HTTP_PROVIDERS]);