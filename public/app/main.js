"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var giphy_component_1 = require('./giphy/giphy.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(giphy_component_1.GiphyComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map