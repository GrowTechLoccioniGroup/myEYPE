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
var calls_service_1 = require('./calls/calls.service');
var data_service_1 = require('../data/data.service');
var primeng_1 = require('primeng/primeng');
var ControlComponent = (function () {
    function ControlComponent(calls, data) {
        this.calls = calls;
        this.data = data;
        this.ServerParameters = [
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
        ];
        this.ClientParameter = {
            id_parameters: 0,
            TimeStamp: new Date(1993, 2, 3),
            AirTemperature: 0.0,
            WaterTemperature: 0.0,
            Humidity: 0,
            PH: 0.0,
            Conductivity: 0
        };
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.getParameters();
    };
    ControlComponent.prototype.getParameters = function () {
        var _this = this;
        this.calls.GetAllParameters().subscribe(function (parameter) {
            _this.ServerParameters = parameter.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all parameters complete!'); });
        this.ClientParameter = this.ServerParameters[0];
    };
    ControlComponent.prototype.setParameters = function () {
        this.calls.SetParameters(this.ClientParameter).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log('Set all parameters complete!'); });
    };
    ControlComponent.prototype.setCurtainsUp = function () {
        if (!this.data.getCurtainsState()) {
            this.calls.SetCurtainsUp(true).subscribe(function (curtain) { return curtain.json(); }, function (error) { return console.log(error); }, function () { return console.log('Set curtain complete!'); });
            this.data.setCurtainsState(true);
        }
    };
    ControlComponent.prototype.setCurtainsDown = function () {
        if (this.data.getCurtainsState()) {
            this.calls.SetCurtainsDown(false).subscribe(function (curtain) { return curtain.json(); }, function (error) { return console.log(error); }, function () { return console.log('Set curtain complete!'); });
            this.data.setCurtainsState(false);
        }
    };
    ControlComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/control/control.component.html',
            styleUrls: ['app/control/control.component.css'],
            directives: [primeng_1.Slider],
            providers: [calls_service_1.ControlCallsService]
        }), 
        __metadata('design:paramtypes', [calls_service_1.ControlCallsService, data_service_1.DataService])
    ], ControlComponent);
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map