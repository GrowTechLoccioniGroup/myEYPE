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
var recipe_service_1 = require('../recipe/recipe.service');
var common_1 = require('@angular/common');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var TempChartComponent = (function () {
    function TempChartComponent(_recipeService) {
        this._recipeService = _recipeService;
        this.otherParameters = [
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
        ];
        this.lineChartData = [
            { data: [this.otherParameters[23].AirTemperature, this.otherParameters[22].AirTemperature, this.otherParameters[21].AirTemperature, this.otherParameters[20].AirTemperature, this.otherParameters[19].AirTemperature, this.otherParameters[18].AirTemperature, this.otherParameters[17].AirTemperature, this.otherParameters[16].AirTemperature, this.otherParameters[15].AirTemperature, this.otherParameters[14].AirTemperature, this.otherParameters[13].AirTemperature, this.otherParameters[12].AirTemperature, this.otherParameters[11].AirTemperature, this.otherParameters[10].AirTemperature, this.otherParameters[9].AirTemperature, this.otherParameters[8].AirTemperature, this.otherParameters[7].AirTemperature, this.otherParameters[6].AirTemperature, this.otherParameters[5].AirTemperature, this.otherParameters[4].AirTemperature, this.otherParameters[3].AirTemperature, this.otherParameters[2].AirTemperature, this.otherParameters[1].AirTemperature, this.otherParameters[0].AirTemperature], label: 'T. Aria' },
        ];
        this.lineChartLabels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(0, 174, 237, 0.2)',
                borderColor: 'rgba(0, 174, 237, 1)',
                pointBackgroundColor: 'rgba(0, 174, 237, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 174, 237, 0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(0, 174, 237, 0.2)',
                borderColor: 'rgba(0, 174, 237, 1)',
                pointBackgroundColor: 'rgba(0, 174, 237, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 174, 237, 0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    TempChartComponent.prototype.ngOnInit = function () {
        this.getParametersItems();
    };
    TempChartComponent.prototype.getParametersItems = function () {
        var _this = this;
        this._recipeService.getParameters().subscribe(function (parameter) {
            _this.otherParameters = parameter.json();
            if (_this.otherParameters.length < 24) {
                for (var i = _this.otherParameters.length; i < 24; i++) {
                    _this.otherParameters[i] = { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 };
                }
            }
            _this.lineChartData = [
                { data: [_this.otherParameters[23].AirTemperature, _this.otherParameters[22].AirTemperature, _this.otherParameters[21].AirTemperature, _this.otherParameters[20].AirTemperature, _this.otherParameters[19].AirTemperature, _this.otherParameters[18].AirTemperature, _this.otherParameters[17].AirTemperature, _this.otherParameters[16].AirTemperature, _this.otherParameters[15].AirTemperature, _this.otherParameters[14].AirTemperature, _this.otherParameters[13].AirTemperature, _this.otherParameters[12].AirTemperature, _this.otherParameters[11].AirTemperature, _this.otherParameters[10].AirTemperature, _this.otherParameters[9].AirTemperature, _this.otherParameters[8].AirTemperature, _this.otherParameters[7].AirTemperature, _this.otherParameters[6].AirTemperature, _this.otherParameters[5].AirTemperature, _this.otherParameters[4].AirTemperature, _this.otherParameters[3].AirTemperature, _this.otherParameters[2].AirTemperature, _this.otherParameters[1].AirTemperature, _this.otherParameters[0].AirTemperature], label: 'T. Aria' },
            ];
        }, function (error) { return console.log(error); }, function () { return console.log('Get all PARAMETERS complete!'); });
    };
    // events
    TempChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    TempChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    TempChartComponent = __decorate([
        core_1.Component({
            selector: 'my-temp-chart',
            providers: [recipe_service_1.RecipeService],
            templateUrl: 'app/charts/chart.component.html',
            styleUrls: ['app/charts/chart.component.css'],
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], TempChartComponent);
    return TempChartComponent;
}());
exports.TempChartComponent = TempChartComponent;
//# sourceMappingURL=temp.chart.component.js.map