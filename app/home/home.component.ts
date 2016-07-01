import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { ClassParameters } from '../classes/class.parameters';
import { ClassOptions } from '../classes/class.options';
import { SwitchComponent } from '../switch/switch.component';
import { ClassRecipe } from '../classes/class.recipe';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'my-home',
    providers: [RecipeService],
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    directives: [ FORM_DIRECTIVES, SwitchComponent]
})

export class HomeComponent implements OnInit {
    public plant: string = "../app/ext/plants/Insalata.png";
    public otherOptions: ClassOptions = {
        id_parameters: 0,
        RGB: "",
        Light: false,
        AdressImage: ""
    };

    public myOptions: ClassOptions = {
        id_parameters: 0,
        RGB: "",
        Light: true,
        AdressImage: ""
    };
    private name: string = "Insalata";

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

            this.myOptions = this.otherOptions;
        },
        error => console.log(error),
        () => console.log('Get all Options complete'));
    }

    private setOptionsItems() {
        this.myOptions.Light = !this.myOptions.Light;
        this._recipeService.setOptions(this.myOptions).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set all Options complete'));
    }

}