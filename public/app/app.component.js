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
// services
var company_service_1 = require('./company/company.service');
var AppComponent = (function () {
    function AppComponent(_CompanyService) {
        this._CompanyService = _CompanyService;
    }
    AppComponent.prototype.getCompanyName = function () {
        this._CompanyService.getName();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getCompanyName();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>The ' + faker.random.word() + ' ' + faker.random.word() + ' App</h1>',
            providers: [company_service_1.CompanyService]
        }), 
        __metadata('design:paramtypes', [company_service_1.CompanyService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map