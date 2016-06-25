import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RecipeService } from '../recipe/recipe.service';
import { ClassParameters } from '../classes/class.parameters';
import { Slider } from 'primeng/primeng';

@Component({
    selector: 'my-control',
    providers: [RecipeService],
    templateUrl: 'app/control/control.component.html',
    styleUrls: ['app/control/control.component.css'],
    directives: [CORE_DIRECTIVES, Slider]
})

export class ControlComponent implements OnInit {

    public errorMessage: string;
    public otherParameters: ClassParameters[] = [
        {  TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
    ];
    public myParameters: ClassParameters = {
        TimeStamp: new Date(1993, 2, 3),
        AirTemperature: 0.0,
        WaterTemperature: 0.0,
        Humidity: 0,
        PH: 0.0,
        Conductivity: 0
    };
    public setCurtains = false;
    public _air: number = 0.0;
    public _ph: number = 0.0;
    public _hum: number = 0;

    constructor(private _recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    private getParametersItems(): void {
        this._recipeService.getParameters().subscribe(
            (parameter) => {
                this.otherParameters = parameter.json();
            },
            error => console.log(error),
            () => console.log('Get all PARAMETERS complete!'));
    }

    private setParametersItems() {
        this.myParameters.AirTemperature = this._air;
        this.myParameters.PH = this._ph;
        this.myParameters.Humidity = this._hum;
        this._recipeService.setParameters(this.myParameters).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set all PARAMETERS complete!'));
    }

    private setCurtainsItem() {
        this._recipeService.setCurtains(this.setCurtains).subscribe(
            curtain => curtain.json(),
            error => console.log(error),
            () => console.log('Set CURTAIN complete!'));
    }

    humMin() {
        this.myParameters.Humidity--;
    }
    humMax() {
        this.myParameters.Humidity++;
    }

    airTempMin() {
        this.myParameters.AirTemperature--;
    }

    airTempMax() {
        this.myParameters.AirTemperature++;
    }

    pHMin() {
        this.myParameters.PH--;
    }
    pHMax() {
        this.myParameters.PH++;
    }



}