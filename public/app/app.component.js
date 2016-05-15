"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.save = function () {
        var id = Math.floor(Math.random() * (99999999999999999 - 1)) + 1;
        var body = JSON.stringify({ blob: JSON.stringify(document.body.innerHTML) });
        this.http.put('/blob/' + id.toString(), body, { headers: { 'Content-Type': 'application/json' } }).subscribe(function () {
            console.log('saved id:', id);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<button id="save" class="button" (click)=save()>Save your Random Template</button><site-template></site-template>',
            providers: []
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map