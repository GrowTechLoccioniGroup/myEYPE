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
var switch_component_1 = require('../switch/switch.component');
var HomeComponent = (function () {
    function HomeComponent(_recipeService) {
        this._recipeService = _recipeService;
        this.plant = "../app/ext/plants/insalata.png";
        this.otherOptions = {
            id_parameters: 0,
            RGB: "",
            Light: false,
            AdressImage: ""
        };
        this.otherParameters = [
            { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getParametersItems();
        this.getOptionsItems();
    };
    HomeComponent.prototype.getParametersItems = function () {
        var _this = this;
        this._recipeService.getParameters().subscribe(function (parameter) {
            _this.otherParameters = parameter.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all PARAMETERS complete!'); });
    };
    HomeComponent.prototype.getOptionsItems = function () {
        var _this = this;
        this._recipeService.getOptions().subscribe(function (option) {
            _this.otherOptions = option.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Options complete'); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            providers: [recipe_service_1.RecipeService],
            templateUrl: 'app/home/home.component.html',
            styleUrls: ['app/home/home.component.css'],
            directives: [switch_component_1.SwitchComponent]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map