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
var ShutdownComponent = (function () {
    function ShutdownComponent(_recipeService) {
        this._recipeService = _recipeService;
    }
    ShutdownComponent.prototype.ngOnInit = function () {
        this.getShutdown();
    };
    ShutdownComponent.prototype.getShutdown = function () {
        this._recipeService.getShutdown().subscribe(function (shutdown) {
            console.log("DONE");
        }, function (error) { return console.log(error); }, function () { return console.log('Get shutdown complete!'); });
    };
    ShutdownComponent = __decorate([
        core_1.Component({
            selector: 'my-shutdown',
            providers: [recipe_service_1.RecipeService],
            template: '<div class="row"><h1 class="text-center">Spegnimento in corso. Attendere...</h1></div>'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], ShutdownComponent);
    return ShutdownComponent;
}());
exports.ShutdownComponent = ShutdownComponent;
//# sourceMappingURL=shutdown.component.js.map