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
var calls_service_1 = require('./calls/calls.service');
var RecipeComponent = (function () {
    function RecipeComponent(calls) {
        this.calls = calls;
        this.select = 0;
        this.light = [''];
        this.ServerRecipes = [
            { id_recipe: 0, Name: '', AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0.0, PH: 0.0, Conductivity: 0, RGB: '', Light: false }
        ];
        this.ClientRecipe = {
            id_recipe: 0,
            Name: '',
            AirTemperature: 0.0,
            WaterTemperature: 0.0,
            Humidity: 0,
            PH: 0.0,
            Conductivity: 0,
            RGB: '',
            Light: false
        };
    }
    RecipeComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipeComponent.prototype.selectedRow = function (recipe, light) {
        this.select = recipe.id_recipe;
        this.ClientRecipe = recipe;
        if (light == 'accesa') {
            this.ClientRecipe.Light = true;
        }
        else {
            this.ClientRecipe.Light = false;
        }
    };
    RecipeComponent.prototype.getRecipes = function () {
        var _this = this;
        this.calls.GetAllRecipes().subscribe(function (recipe) {
            _this.ServerRecipes = recipe.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all recipes complete!'); });
        for (var i = 0; i < this.ServerRecipes.length; i++) {
            if (this.ServerRecipes[i].Light == true) {
                this.light[i] = 'accesa';
            }
            else {
                this.light[i] = 'spenta';
            }
        }
    };
    RecipeComponent.prototype.setRecipe = function () {
        this.calls.SetRecipe(this.ClientRecipe).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log('Set recipe complete!'); });
    };
    RecipeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/recipe/recipe.component.html',
            providers: [calls_service_1.RecipeCallsService],
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [calls_service_1.RecipeCallsService])
    ], RecipeComponent);
    return RecipeComponent;
}());
exports.RecipeComponent = RecipeComponent;
//# sourceMappingURL=recipe.component.js.map