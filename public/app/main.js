"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var employee_component_1 = require('./employee/employee.component');
var giphy_component_1 = require('./giphy/giphy.component');
var template_component_1 = require('./template/template.component');
var youtube_component_1 = require('./youtube/youtube.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(giphy_component_1.GiphyComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(employee_component_1.EmployeeComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(template_component_1.TemplateComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(youtube_component_1.YoutubeComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map