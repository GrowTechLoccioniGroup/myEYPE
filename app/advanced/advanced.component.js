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
var primeng_1 = require('primeng/primeng');
var calls_service_1 = require('./calls/calls.service');
var AdvancedComponent = (function () {
    function AdvancedComponent(calls) {
        this.calls = calls;
        this.ServerOptions = {
            id_parameters: 0,
            RGB: "",
            Light: false,
            AdressImage: ""
        };
        this.ClientOptions = {
            id_parameters: 0,
            RGB: "",
            Light: false,
            AdressImage: ""
        };
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
    AdvancedComponent.prototype.ngOnInit = function () {
        this.getOptions();
    };
    AdvancedComponent.prototype.getOptions = function () {
        var _this = this;
        this.calls.GetAllOptions().subscribe(function (option) {
            _this.ServerOptions = option.json();
            var x = _this.ServerOptions.RGB.split("-");
            _this.r = parseInt(x[0]);
            _this.g = parseInt(x[1]);
            _this.b = parseInt(x[2]);
        }, function (error) { return console.log(error); }, function () { return console.log('Get options complete'); });
    };
    AdvancedComponent.prototype.setOptions = function () {
        this.ClientOptions = this.ServerOptions;
        this.ClientOptions.RGB = this.r + "-" + this.g + "-" + this.b;
        this.calls.SetOptions(this.ClientOptions).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log('Set options complete'); });
    };
    AdvancedComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/advanced/advanced.component.html',
            directives: [primeng_1.Slider],
            providers: [calls_service_1.AdvancedCallsService]
        }), 
        __metadata('design:paramtypes', [calls_service_1.AdvancedCallsService])
    ], AdvancedComponent);
    return AdvancedComponent;
}());
exports.AdvancedComponent = AdvancedComponent;
//# sourceMappingURL=advanced.component.js.map