import { ElementRef, EventEmitter } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Draggable {
    private el;
    private domHandler;
    scope: string;
    dragEffect: string;
    dragHandle: string;
    onDragStart: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDrag: EventEmitter<any>;
    private handle;
    constructor(el: ElementRef, domHandler: DomHandler);
    dragStart(event: any): void;
    drag(event: any): void;
    dragEnd(event: any): void;
    mouseover(event: any): void;
    mouseleave(event: any): void;
    allowDrag(): boolean;
}
