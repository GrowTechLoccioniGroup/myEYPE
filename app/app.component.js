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
var router_deprecated_1 = require('@angular/router-deprecated');
var hamburger_component_1 = require('./hamburger/hamburger.component');
var home_component_1 = require('./home/home.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var control_component_1 = require('./control/control.component');
var recipe_component_1 = require('./recipe/recipe.component');
var guide_component_1 = require('./guide/guide.component');
var site_component_1 = require('./site/site.component');
var avanz_component_1 = require('./avanz/avanz.component');
var logo_component_1 = require('./logo/logo.component');
var AppComponent = (function () {
    function AppComponent() {
        this.menuClosed = true;
    }
    AppComponent.prototype.closeMenu = function () {
        this.menuClosed = !this.menuClosed;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, hamburger_component_1.HamburgerComponent, logo_component_1.LogoComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: './control/control.component',
                name: 'Control-Component',
                component: control_component_1.ControlComponent
            },
            {
                path: './dashboard/dashboard.component',
                name: 'Dashboard-Component',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: './home/home.component',
                name: 'Home-Component',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: './recipe/recipe.component',
                name: 'Recipe-Component',
                component: recipe_component_1.RecipeComponent
            },
            {
                path: './guide/guide.component',
                name: 'Guide-Component',
                component: guide_component_1.GuideComponent
            },
            {
                path: './site/site.component',
                name: 'Site-Component',
                component: site_component_1.SiteComponent
            },
            {
                path: './avanz/avanz.component',
                name: 'Avanz-Component',
                component: avanz_component_1.AvanzComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map