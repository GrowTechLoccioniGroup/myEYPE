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
var app_constants_1 = require('../app.constants');
var RecipeService = (function () {
    function RecipeService(_http, _config) {
        var _this = this;
        this._http = _http;
        this._config = _config;
        this.getParameters = function () {
            return _this._http.get(_this.actionUrl + "/values/getparameters");
        };
        this.getOptions = function () {
            return _this._http.get(_this.actionUrl + "/values/getoptions");
        };
        this.getRecipes = function () {
            return _this._http.get(_this.actionUrl + "/recipes");
        };
        this.getShutdown = function () {
            return _this._http.get(_this.actionUrl + "/shutdown");
        };
        /*public getSingle = (id: number): Observable<Response> => {
            return this._http.get(this.actionUrl + id);
        }*/
        // add
        /*public post = (itemName: string): Observable<Response> => {
            var toAdd = JSON.stringify({ ItemName: itemName });
    
            return this._http.post(this.actionUrl, toAdd, { headers: this.headers });
        }*/
        // update
        this.setParameters = function (itemToUpdate) {
            return _this._http.put(_this.actionUrl + "/values/setparameters", JSON.stringify(itemToUpdate), { headers: _this.headers });
        };
        this.setOptions = function (itemToUpdate) {
            return _this._http.put(_this.actionUrl + "/values/setoptions", JSON.stringify(itemToUpdate), { headers: _this.headers });
        };
        this.setCurtainsDown = function (setCurtains) {
            return _this._http.put(_this.actionUrl + "/values/setcurtains/0", JSON.stringify(setCurtains), { headers: _this.headers });
        };
        this.setCurtainsUp = function (setCurtains) {
            return _this._http.put(_this.actionUrl + "/values/setcurtains/1", JSON.stringify(setCurtains), { headers: _this.headers });
        };
        this.setRecipe = function (itemToUpdate) {
            return _this._http.put(_this.actionUrl + "/recipes/apply", JSON.stringify(itemToUpdate), { headers: _this.headers });
        };
        this.actionUrl = _config.ServerWithApiUrl;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Config])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map