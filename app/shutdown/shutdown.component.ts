import { Component, OnInit }    from '@angular/core';
import { ShutdownCallsService } from './calls/calls.service';

@Component({
    template: '<div class="row"><h1 class="text-center">Spegnimento in corso. Attendere...</h1></div>',
    providers: [ ShutdownCallsService ]
})

export class ShutdownComponent implements OnInit {

    constructor(
        private calls: ShutdownCallsService) { }

    ngOnInit () {
        this.getShutdown();
    }

    private getShutdown(): void {
        this.calls.GetShutdown().subscribe(
            error => console.log(error),
            () => console.log('Get shutdown complete!'));
    }
}