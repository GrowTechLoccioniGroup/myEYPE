import { ElementRef } from '@angular/core';
import { MenuItem } from '../common';
import { Router } from '@angular/router';
export declare class PanelMenuSub {
    private router;
    item: MenuItem;
    expanded: boolean;
    constructor(router: Router);
    activeItems: MenuItem[];
    onClick(event: any, item: MenuItem): void;
    isActive(item: MenuItem): boolean;
}
export declare class PanelMenu {
    private el;
    model: MenuItem[];
    style: any;
    styleClass: string;
    activeItems: MenuItem[];
    constructor(el: ElementRef);
    headerClick(event: any, item: any): void;
    unsubscribe(item: any): void;
    isActive(item: MenuItem): boolean;
    ngOnDestroy(): void;
}
