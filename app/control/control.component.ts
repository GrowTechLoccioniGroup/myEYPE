import { Component, OnInit }        from '@angular/core';
import { ControlCallsService }      from './calls/calls.service';
import { DataService }              from '../data/data.service';
import { ClassParameters }          from '../classes/class.parameters';
import { Slider } from 'primeng/primeng';

@Component({
    templateUrl: 'app/control/control.component.html',
    styleUrls: ['app/control/control.component.css'],
    directives: [Slider],
    providers: [ControlCallsService]
})
export class ControlComponent implements OnInit {
    public ServerParameters: ClassParameters[] = [
        { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
    ];
    public ClientParameter: ClassParameters = {
        id_parameters: 0,
        TimeStamp: new Date(1993, 2, 3),
        AirTemperature: 0.0,
        WaterTemperature: 0.0,
        Humidity: 0,
        PH: 0.0,
        Conductivity: 0
    };

    constructor( private calls: ControlCallsService, private data: DataService) { }

    ngOnInit() {
        this.getParameters();
    }

    private getParameters(): void {
        this.calls.GetAllParameters().subscribe(
            (parameter) => {
                this.ServerParameters = parameter.json();
            },
            error => console.log(error),
            () => console.log('Get all parameters complete!'));
        this.ClientParameter = this.ServerParameters[0];
    }

    private setParameters() {
        this.calls.SetParameters(this.ClientParameter).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set all parameters complete!'));
    }

    private setCurtainsUp() {
        if (!this.data.getCurtainsState()) {
            this.calls.SetCurtainsUp(true).subscribe(
                curtain => curtain.json(),
                error => console.log(error),
                () => console.log('Set curtain complete!'));
            this.data.setCurtainsState(true);
        }
    }

    private setCurtainsDown() {
        if (this.data.getCurtainsState()) {
            this.calls.SetCurtainsDown(false).subscribe(
                curtain => curtain.json(),
                error => console.log(error),
                () => console.log('Set curtain complete!'));
            this.data.setCurtainsState(false);
        }
    }
}