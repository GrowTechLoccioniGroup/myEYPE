import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class RadioButton implements ControlValueAccessor {
    value: any;
    name: string;
    disabled: boolean;
    click: EventEmitter<any>;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    checked: boolean;
    private hover;
    onclick(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
