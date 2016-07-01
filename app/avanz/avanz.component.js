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
var primeng_1 = require('primeng/primeng');
var AvanzComponent = (function () {
    function AvanzComponent(_recipeService) {
        this._recipeService = _recipeService;
        this.otherOptions = {
            id_parameters: 0,
            RGB: "",
            Light: false,
            AdressImage: ""
        };
        this.myOptions = {
            id_parameters: 0,
            RGB: "",
            Light: false,
            AdressImage: ""
        };
        this.rS = "";
        this.gS = "";
        this.bS = "";
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
    AvanzComponent.prototype.ngOnInit = function () {
        this.getOptionsItems();
    };
    /*lightState() {
        this.myOptions.Light = !this.myOptions.Light;
    }*/
    AvanzComponent.prototype.getOptionsItems = function () {
        var _this = this;
        this._recipeService.getOptions().subscribe(function (option) {
            console.log("DONE");
            _this.otherOptions = option.json();
            var x = _this.otherOptions.RGB.split("-");
            console.log(x);
            _this.r = parseInt(x[0]);
            console.log(_this.r);
            _this.g = parseInt(x[1]);
            console.log(_this.g);
            _this.b = parseInt(x[2]);
            console.log(_this.b);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Options complete'); });
        /* if (this.otherOptions.RGB.length > 3) {
             let x = this.otherOptions.RGB.split("-");
             this.r = parseInt(x[0]);
             this.g = parseInt(x[1]);
             this.b = parseInt(x[2]);
         }*/
    };
    AvanzComponent.prototype.setOptionsItems = function () {
        this.myOptions.RGB = this.r + "-" + this.g + "-" + this.b;
        this._recipeService.setOptions(this.myOptions).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return console.log('Set all Options complete'); });
    };
    AvanzComponent = __decorate([
        core_1.Component({
            selector: 'my-avanz',
            templateUrl: 'app/avanz/avanz.component.html',
            styleUrls: ['app/avanz/avanz.component.css'],
            providers: [recipe_service_1.RecipeService],
            directives: [switch_component_1.SwitchComponent, primeng_1.Slider]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], AvanzComponent);
    return AvanzComponent;
}());
exports.AvanzComponent = AvanzComponent;
//# sourceMappingURL=avanz.component.js.map