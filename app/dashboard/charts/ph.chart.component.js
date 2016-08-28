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
var common_1 = require('@angular/common');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var PhChartComponent = (function () {
    function PhChartComponent(calls) {
        this.calls = calls;
        this.ServerParameters = [
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
            { data: [this.ServerParameters[23].PH, this.ServerParameters[22].PH, this.ServerParameters[21].PH, this.ServerParameters[20].PH, this.ServerParameters[19].PH, this.ServerParameters[18].PH, this.ServerParameters[17].PH, this.ServerParameters[16].PH, this.ServerParameters[15].PH, this.ServerParameters[14].PH, this.ServerParameters[13].PH, this.ServerParameters[12].PH, this.ServerParameters[11].PH, this.ServerParameters[10].PH, this.ServerParameters[9].PH, this.ServerParameters[8].PH, this.ServerParameters[7].PH, this.ServerParameters[6].PH, this.ServerParameters[5].PH, this.ServerParameters[4].PH, this.ServerParameters[3].PH, this.ServerParameters[2].PH, this.ServerParameters[1].PH, this.ServerParameters[0].PH], label: 'pH' },
        ];
        this.lineChartLabels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(17,191,21,0.2)',
                borderColor: 'rgba(17,191,21,1)',
                pointBackgroundColor: 'rgba(17,191,21,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(17,191,21,0.8)'
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
                backgroundColor: 'rgba(17,191,21,0.2)',
                borderColor: 'rgba(17,191,21,1)',
                pointBackgroundColor: 'rgba(17,191,21,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(17,191,21,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    PhChartComponent.prototype.setParameters = function () {
        for (var i = 0; i <= 24; i++) {
            this.ServerParameters[i] = { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 };
        }
    };
    PhChartComponent.prototype.ngOnInit = function () {
        //this.setParameters(); // non funziona stranamente
        this.getParameters();
    };
    PhChartComponent.prototype.getParameters = function () {
        var _this = this;
        this.calls.GetAllParameters().subscribe(function (parameter) {
            _this.ServerParameters = parameter.json();
            if (_this.ServerParameters.length < 24) {
                for (var i = _this.ServerParameters.length; i < 24; i++) {
                    _this.ServerParameters[i] = { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 };
                }
            }
            _this.lineChartData = [
                { data: [_this.ServerParameters[23].PH, _this.ServerParameters[22].PH, _this.ServerParameters[21].PH, _this.ServerParameters[20].PH, _this.ServerParameters[19].PH, _this.ServerParameters[18].PH, _this.ServerParameters[17].PH, _this.ServerParameters[16].PH, _this.ServerParameters[15].PH, _this.ServerParameters[14].PH, _this.ServerParameters[13].PH, _this.ServerParameters[12].PH, _this.ServerParameters[11].PH, _this.ServerParameters[10].PH, _this.ServerParameters[9].PH, _this.ServerParameters[8].PH, _this.ServerParameters[7].PH, _this.ServerParameters[6].PH, _this.ServerParameters[5].PH, _this.ServerParameters[4].PH, _this.ServerParameters[3].PH, _this.ServerParameters[2].PH, _this.ServerParameters[1].PH, _this.ServerParameters[0].PH], label: 'pH' },
            ];
        }, function (error) { return console.log(error); }, function () { return console.log('Get parameters complete!'); });
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
            templateUrl: 'app/dashboard/charts/chart.component.html',
            styleUrls: ['app/dashboard/charts/chart.component.css'],
            providers: [calls_service_1.ChartsCallsService],
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [calls_service_1.ChartsCallsService])
    ], PhChartComponent);
    return PhChartComponent;
}());
exports.PhChartComponent = PhChartComponent;
//# sourceMappingURL=ph.chart.component.js.map