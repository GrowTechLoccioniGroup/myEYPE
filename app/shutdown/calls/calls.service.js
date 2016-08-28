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
var Rx_1 = require('rxjs/Rx');
var connection_service_1 = require('../../connection/connection.service');
var ShutdownCallsService = (function () {
    function ShutdownCallsService(http, connectionService) {
        var _this = this;
        this.http = http;
        this.connectionService = connectionService;
        this.GetShutdown = function () {
            return _this.http.get(_this.url + '/shutdown').catch(_this.handleError);
        };
        this.url = connectionService.ServerAddress;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    ShutdownCallsService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    ShutdownCallsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, connection_service_1.ConnectionService])
    ], ShutdownCallsService);
    return ShutdownCallsService;
}());
exports.ShutdownCallsService = ShutdownCallsService;
//# sourceMappingURL=calls.service.js.map