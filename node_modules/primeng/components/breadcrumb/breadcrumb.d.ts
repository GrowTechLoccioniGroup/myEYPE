import { OnDestroy } from '@angular/core';
import { MenuItem } from '../common';
import { Router } from '@angular/router';
export declare class Breadcrumb implements OnDestroy {
    private router;
    model: MenuItem[];
    style: any;
    styleClass: string;
    constructor(router: Router);
    itemClick(event: any, item: MenuItem): void;
    ngOnDestroy(): void;
}
