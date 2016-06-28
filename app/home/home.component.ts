import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { ClassParameters } from '../classes/class.parameters';
import { ClassOptions } from '../classes/class.options';
import { SwitchComponent } from '../switch/switch.component';

@Component({
    selector: 'my-home',
    providers: [RecipeService],
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    directives: [SwitchComponent]
})

export class HomeComponent implements OnInit {
    public plant: string = "../app/ext/plants/insalata.png";
    public otherOptions: ClassOptions = {
        id_parameters: 0,
        RGB: "",
        Light: false,
        AdressImage: ""
    };
    public otherParameters: ClassParameters[] = [
        { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
    ];

    constructor(private _recipeService: RecipeService) {
    }

    ngOnInit() {
        this.getParametersItems();
        this.getOptionsItems();
    }

    private getParametersItems(): void {
        this._recipeService.getParameters().subscribe(
            (parameter) => {
                this.otherParameters = parameter.json();
            },
            error => console.log(error),
            () => console.log('Get all PARAMETERS complete!'));
    }

    private getOptionsItems(): void {
    this._recipeService.getOptions().subscribe(
        (option) => {
            this.otherOptions = option.json();
        },
        error => console.log(error),
        () => console.log('Get all Options complete'));
    }

}