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
var PhChartComponent = (function () {
    function PhChartComponent(_recipeService) {
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
            { data: [this.otherParameters[23].PH, this.otherParameters[22].PH, this.otherParameters[21].PH, this.otherParameters[20].PH, this.otherParameters[19].PH, this.otherParameters[18].PH, this.otherParameters[17].PH, this.otherParameters[16].PH, this.otherParameters[15].PH, this.otherParameters[14].PH, this.otherParameters[13].PH, this.otherParameters[12].PH, this.otherParameters[11].PH, this.otherParameters[10].PH, this.otherParameters[9].PH, this.otherParameters[8].PH, this.otherParameters[7].PH, this.otherParameters[6].PH, this.otherParameters[5].PH, this.otherParameters[4].PH, this.otherParameters[3].PH, this.otherParameters[2].PH, this.otherParameters[1].PH, this.otherParameters[0].PH], label: 'Series A' },
        ];
        this.lineChartLabels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
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
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    PhChartComponent.prototype.ngOnInit = function () {
        this.getParametersItems();
    };
    PhChartComponent.prototype.getParametersItems = function () {
        var _this = this;
        this._recipeService.getParameters().subscribe(function (parameter) {
            _this.otherParameters = parameter.json();
            _this.lineChartData = [
                { data: [_this.otherParameters[23].PH, _this.otherParameters[22].PH, _this.otherParameters[21].PH, _this.otherParameters[20].PH, _this.otherParameters[19].PH, _this.otherParameters[18].PH, _this.otherParameters[17].PH, _this.otherParameters[16].PH, _this.otherParameters[15].PH, _this.otherParameters[14].PH, _this.otherParameters[13].PH, _this.otherParameters[12].PH, _this.otherParameters[11].PH, _this.otherParameters[10].PH, _this.otherParameters[9].PH, _this.otherParameters[8].PH, _this.otherParameters[7].PH, _this.otherParameters[6].PH, _this.otherParameters[5].PH, _this.otherParameters[4].PH, _this.otherParameters[3].PH, _this.otherParameters[2].PH, _this.otherParameters[1].PH, _this.otherParameters[0].PH], label: 'Series A' },
            ];
        }, function (error) { return console.log(error); }, function () { return console.log('Get all PARAMETERS complete!'); });
    };
    // events
    PhChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PhChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PhChartComponent = __decorate([
        core_1.Component({
            selector: 'my-ph-chart',
            providers: [recipe_service_1.RecipeService],
            templateUrl: 'app/charts/chart.component.html',
            styleUrls: ['app/charts/chart.component.css'],
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], PhChartComponent);
    return PhChartComponent;
}());
exports.PhChartComponent = PhChartComponent;
//# sourceMappingURL=ph.chart.component.js.map