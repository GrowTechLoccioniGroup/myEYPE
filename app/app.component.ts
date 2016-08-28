import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { LogoComponent } from './logo/logo.component';
import { BootingComponent } from './booting/booting.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    directives: [ ROUTER_DIRECTIVES, HamburgerComponent, LogoComponent, BootingComponent ],
})
export class AppComponent implements OnInit {
    menuClosed = false;
    public videoHide: boolean = false;

    ngOnInit() {
        setTimeout(() => {
            this.videoHide = true;
        }, 7000);
    }

    closeMenu() {
        this.menuClosed = !this.menuClosed;
    }
}