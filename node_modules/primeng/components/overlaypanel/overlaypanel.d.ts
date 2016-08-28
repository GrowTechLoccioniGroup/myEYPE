import { OnInit, OnDestroy, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class OverlayPanel implements OnInit, OnDestroy {
    private el;
    private domHandler;
    private renderer;
    dismissable: boolean;
    showCloseIcon: boolean;
    style: any;
    styleClass: string;
    onBeforeShow: EventEmitter<any>;
    onAfterShow: EventEmitter<any>;
    onBeforeHide: EventEmitter<any>;
    onAfterHide: EventEmitter<any>;
    visible: boolean;
    hoverCloseIcon: boolean;
    documentClickListener: any;
    selfClick: boolean;
    targetEvent: boolean;
    target: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer);
    ngOnInit(): void;
    toggle(event: any, target?: any): void;
    show(event: any, target?: any): void;
    hide(): void;
    onPanelClick(): void;
    onCloseClick(event: any): void;
    ngOnDestroy(): void;
}
