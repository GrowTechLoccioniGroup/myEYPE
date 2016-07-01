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
var RecipeComponent = (function () {
    function RecipeComponent(_recipeService) {
        this._recipeService = _recipeService;
        this.myRecipe = {
            id_recipe: 0,
            Name: "",
            AirTemperature: 0.0,
            WaterTemperature: 0.0,
            Humidity: 0,
            PH: 0.0,
            Conductivity: 0,
            RGB: "",
            Light: false
        };
    }
    RecipeComponent.prototype.ngOnInit = function () {
        this.getRecipesItems();
    };
    RecipeComponent.prototype.selectedRow = function (recipe) {
        this.myRecipe = recipe;
    };
    RecipeComponent.prototype.getRecipesItems = function () {
        var _this = this;
        this._recipeService.getRecipes().subscribe(function (recipe) {
            _this.otherRecipes = recipe.json();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all RECIPES complete!'); });
    };
    RecipeComponent.prototype.setRecipe = function () {
        this._recipeService.setRecipe(this.myRecipe).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log('Set all PARAMETERS complete!'); });
    };
    RecipeComponent = __decorate([
        core_1.Component({
            selector: 'my-recipe',
            providers: [recipe_service_1.RecipeService],
            templateUrl: 'app/recipe/recipe.component.html',
            styleUrls: ['app/recipe/recipe.component.css']
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], RecipeComponent);
    return RecipeComponent;
}());
exports.RecipeComponent = RecipeComponent;
//# sourceMappingURL=recipe.component.js.map