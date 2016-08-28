import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class RowExpansionLoader {
    private viewContainer;
    template: TemplateRef<any>;
    rowData: any;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
}
