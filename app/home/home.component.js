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
var data_service_1 = require('./../data/data.service');
var HomeComponent = (function () {
    function HomeComponent(calls, data) {
        this.calls = calls;
        this.data = data;
        this.ServerOptions = {
            id_parameters: 0,
            RGB: '000-000-000',
            Light: true,
            AdressImage: '../app/ext/plants/Insalata.png'
        };
        this.ClientOptions = {
            id_parameters: 0,
            RGB: '',
            Light: false,
            AdressImage: ''
        };
        this.ServerParameters = [
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getParameters();
        this.getOptions();
        this.data.setLastRGB(this.ServerOptions.RGB);
    };
    HomeComponent.prototype.getName = function () {
        var k = this.ServerOptions.AdressImage.split('/');
        var j = k[4].split('.');
        this.data.SetName(j[0]);
        return j[0];
    };
    HomeComponent.prototype.getBGColore = function () {
        var x = this.ServerOptions.RGB.split('-');
        var r = parseInt(x[0]);
        var g = parseInt(x[1]);
        var b = parseInt(x[2]);
        var RGB = 'rgb(' + r + ',' + g + ',' + b + ')';
        return RGB;
    };
    HomeComponent.prototype.getParameters = function () {
        var _this = this;
        this.calls.GetAllParameters().subscribe(function (parameter) {
            _this.ServerParameters = parameter.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get parameters complete!'); });
    };
    HomeComponent.prototype.getOptions = function () {
        var _this = this;
        this.calls.GetAllOptions().subscribe(function (option) {
            _this.ServerOptions = option.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get options complete'); });
        this.ClientOptions = this.ServerOptions;
    };
    HomeComponent.prototype.setOptions = function () {
        this.ClientOptions.Light = !this.ClientOptions.Light;
        if (this.ClientOptions.Light == false) {
            this.ClientOptions.RGB = '000-000-000';
        }
        else {
            this.ClientOptions.RGB = this.data.getLastRGB();
        }
        this.calls.SetOptions(this.ClientOptions).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log('Set option complete'); });
    };
    HomeComponent.prototype.phColor = function (value) {
        if (value >= 0 && value <= 0.9) {
            return 'rgb(209,0,16)';
        }
        else if (value >= 1 && value <= 1.9) {
            return 'rgb(206,69,0)';
        }
        else if (value >= 2 && value <= 2.9) {
            return 'rgb(204,111,0)';
        }
        else if (value >= 3 && value <= 3.9) {
            return 'rgb(232,187,0)';
        }
        else if (value >= 4 && value <= 4.9) {
            return 'rgb(229,223,0)';
        }
        else if (value >= 5 && value <= 5.9) {
            return 'rgb(171,226,0)';
        }
        else if (value >= 6 && value <= 6.9) {
            return 'rgb(133,201,14)';
        }
        else if (value >= 7 && value <= 7.9) {
            return 'rgb(17,191,21)';
        }
        else if (value >= 8 && value <= 8.9) {
            return 'rgb(0,183,131)';
        }
        else if (value >= 9 && value <= 9.9) {
            return 'rgb(14,132,160)';
        }
        else if (value >= 10 && value <= 10.9) {
            return 'rgb(16,81,158)';
        }
        else if (value >= 11 && value <= 11.9) {
            return 'rgb(18,47,155)';
        }
        else if (value >= 12 && value <= 12.9) {
            return 'rgb(55,19,153)';
        }
        else if (value >= 13 && value <= 14) {
            return 'rgb(59,0,127)';
        }
        else if (value > 14 || value < 0) {
            return 'rgb(0,0,0)';
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/home.component.html',
            styleUrls: ['app/home/home.component.css'],
            providers: [calls_service_1.HomeCallsService, data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [calls_service_1.HomeCallsService, data_service_1.DataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map