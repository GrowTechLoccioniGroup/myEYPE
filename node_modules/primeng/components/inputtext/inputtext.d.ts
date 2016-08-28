import { ElementRef } from '@angular/core';
export declare class InputText {
    private el;
    hover: boolean;
    focus: boolean;
    constructor(el: ElementRef);
    onMouseover(e: any): void;
    onMouseout(e: any): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    isDisabled(): any;
}
