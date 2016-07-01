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
var common_1 = require('@angular/common');
var recipe_service_1 = require('../recipe/recipe.service');
var primeng_1 = require('primeng/primeng');
var ControlComponent = (function () {
    function ControlComponent(_recipeService) {
        this._recipeService = _recipeService;
        this.curtain = false;
        this.otherParameters = [
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
        ];
        this.myParameters = {
            id_parameters: 0,
            TimeStamp: new Date(1993, 2, 3),
            AirTemperature: 0.0,
            WaterTemperature: 0.0,
            Humidity: 0,
            PH: 0.0,
            Conductivity: 0
        };
        this.setCurtains = false;
        this._air = 0.0;
        this._ph = 0.0;
        this._hum = 0;
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.getParametersItems();
    };
    ControlComponent.prototype.getParametersItems = function () {
        var _this = this;
        this._recipeService.getParameters().subscribe(function (parameter) {
            _this.otherParameters = parameter.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all PARAMETERS complete!'); });
    };
    ControlComponent.prototype.setParametersItems = function () {
        this.myParameters.AirTemperature = this._air;
        this.myParameters.PH = this._ph;
        this.myParameters.Humidity = this._hum;
        this._recipeService.setParameters(this.myParameters).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log('Set all PARAMETERS complete!'); });
    };
    ControlComponent.prototype.setCurtainsItemsUp = function () {
        if (this.curtain == false) {
            this._recipeService.setCurtainsUp(true).subscribe(function (curtain) { return curtain.json(); }, function (error) { return console.log(error); }, function () { return console.log('Set CURTAIN complete!'); });
            this.curtain = true;
        }
    };
    ControlComponent.prototype.setCurtainsItemsDown = function () {
        if (this.curtain == true) {
            this._recipeService.setCurtainsDown(false).subscribe(function (curtain) { return curtain.json(); }, function (error) { return console.log(error); }, function () { return console.log('Set CURTAIN complete!'); });
            this.curtain = false;
        }
    };
    ControlComponent.prototype.humMin = function () {
        this.myParameters.Humidity--;
    };
    ControlComponent.prototype.humMax = function () {
        this.myParameters.Humidity++;
    };
    ControlComponent.prototype.airTempMin = function () {
        this.myParameters.AirTemperature--;
    };
    ControlComponent.prototype.airTempMax = function () {
        this.myParameters.AirTemperature++;
    };
    ControlComponent.prototype.pHMin = function () {
        this.myParameters.PH--;
    };
    ControlComponent.prototype.pHMax = function () {
        this.myParameters.PH++;
    };
    ControlComponent = __decorate([
        core_1.Component({
            selector: 'my-control',
            providers: [recipe_service_1.RecipeService],
            templateUrl: 'app/control/control.component.html',
            styleUrls: ['app/control/control.component.css'],
            directives: [common_1.CORE_DIRECTIVES, primeng_1.Slider, common_1.NgSwitch, common_1.NgSwitchWhen]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], ControlComponent);
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map