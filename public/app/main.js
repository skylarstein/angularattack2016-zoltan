"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var template_component_1 = require('./template/template.component');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
// bootstrap(GiphyComponent, [HTTP_PROVIDERS]);
// bootstrap(EmployeeComponent, [HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(template_component_1.TemplateComponent, [http_1.HTTP_PROVIDERS]);
// bootstrap(YoutubeComponent, [HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map