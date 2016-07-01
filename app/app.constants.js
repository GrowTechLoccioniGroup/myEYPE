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
var Config = (function () {
    function Config() {
        this.ServerWithApiUrl = "http://DESKTOP-80MK0K7:9000/api";
    }
    Config = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Config);
    return Config;
}());
exports.Config = Config;
/*
    + setparamiters -> in put solo i 3
    + setoptions -> in put rgb e luci
    + setcurtains -> in put tenda alzata o meno
    + getparamiters -> in get ogni 30 min chiedo tutto
    + getoptions -> in get valori rgb e valori luce on/off

    2 classi una parametri una opzioni

*/ 
//# sourceMappingURL=app.constants.js.map