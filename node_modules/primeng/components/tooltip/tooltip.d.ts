import { ElementRef, OnDestroy } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Tooltip implements OnDestroy {
    private el;
    private domHandler;
    text: string;
    tooltipPosition: string;
    tooltipEvent: string;
    container: any;
    constructor(el: ElementRef, domHandler: DomHandler);
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    show(): void;
    hide(): void;
    create(): void;
    ngOnDestroy(): void;
}
