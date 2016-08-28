import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'my-logo',
    templateUrl: 'app/logo/logo.component.html'
})

export class LogoComponent {
    public path: string = "../app/ext/LogoEYPEbianco.png";

    @HostListener('mouseenter') onMouseEnter() {
        this.path = "../app/ext/LogoEYPEgrigio.png";
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.path = "../app/ext/LogoEYPEbianco.png";
    }
}