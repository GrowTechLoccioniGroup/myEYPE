import { ElementRef, AfterViewInit, OnDestroy, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { MenuItem } from '../common';
import { Router } from '@angular/router';
export declare class Menu implements AfterViewInit, OnDestroy {
    private el;
    private domHandler;
    private renderer;
    private router;
    model: MenuItem[];
    popup: boolean;
    style: any;
    styleClass: string;
    appendTo: any;
    container: any;
    documentClickListener: any;
    preventDocumentDefault: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, router: Router);
    ngAfterViewInit(): void;
    toggle(event: any): void;
    show(event: any): void;
    hide(): void;
    itemClick(event: any, item: MenuItem): void;
    ngOnDestroy(): void;
    hasSubMenu(): boolean;
    unsubscribe(item: any): void;
}
