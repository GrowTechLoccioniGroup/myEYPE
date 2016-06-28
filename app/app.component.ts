import { Component, OnInit, Directive, ElementRef, Input, HostListener  } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlComponent } from './control/control.component';
import { RecipeComponent } from './recipe/recipe.component';
import { GuideComponent } from './guide/guide.component';
import { SiteComponent } from './site/site.component';
import { AvanzComponent } from './avanz/avanz.component';
import { LogoComponent } from './logo/logo.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, HamburgerComponent, LogoComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: './control/control.component',
        name: 'Control-Component',
        component: ControlComponent
    },
    {
        path: './dashboard/dashboard.component',
        name: 'Dashboard-Component',
        component: DashboardComponent
    },
    {
        path: './home/home.component',
        name: 'Home-Component',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: './recipe/recipe.component',
        name: 'Recipe-Component',
        component: RecipeComponent
    },
    {
        path: './guide/guide.component',
        name: 'Guide-Component',
        component: GuideComponent
    },
    {
        path: './site/site.component',
        name: 'Site-Component',
        component: SiteComponent
    },
    {
        path: './avanz/avanz.component',
        name: 'Avanz-Component',
        component: AvanzComponent
    }


])

export class AppComponent {
    menuClosed = true;

    closeMenu() {
        this.menuClosed = !this.menuClosed;
    }
}