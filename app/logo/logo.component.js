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
var LogoComponent = (function () {
    function LogoComponent() {
        this.path = "../app/ext/LogoEYPEbianco.png";
    }
    LogoComponent.prototype.onMouseEnter = function () {
        this.path = "../app/ext/LogoEYPEgrigio.png";
    };
    LogoComponent.prototype.onMouseLeave = function () {
        this.path = "../app/ext/LogoEYPEbianco.png";
    };
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], LogoComponent.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], LogoComponent.prototype, "onMouseLeave", null);
    LogoComponent = __decorate([
        core_1.Component({
            selector: 'my-logo',
            templateUrl: 'app/logo/logo.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;
//# sourceMappingURL=logo.component.js.map