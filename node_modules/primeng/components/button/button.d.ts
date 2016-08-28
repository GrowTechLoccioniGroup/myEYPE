import { ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Button implements AfterViewInit, OnDestroy {
    private el;
    private domHandler;
    icon: string;
    iconPos: string;
    private _label;
    private hover;
    private focus;
    private active;
    private initialized;
    constructor(el: ElementRef, domHandler: DomHandler);
    ngAfterViewInit(): void;
    onMouseenter(e: any): void;
    onMouseleave(e: any): void;
    onMouseDown(e: any): void;
    onMouseUp(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    isDisabled(): any;
    getStyleClass(): string;
    label: string;
    ngOnDestroy(): void;
}
