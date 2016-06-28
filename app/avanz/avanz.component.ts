import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { ClassOptions } from '../classes/class.options';
import { SwitchComponent } from '../switch/switch.component';
import { Slider } from 'primeng/primeng';

@Component({
    selector: 'my-avanz',
    templateUrl: 'app/avanz/avanz.component.html',
    styleUrls: ['app/avanz/avanz.component.css'],
    providers: [RecipeService],
    directives: [SwitchComponent, Slider]
})

export class AvanzComponent implements OnInit {
    public otherOptions: ClassOptions = {
        id_parameters: 0,
        RGB: "",
        Light: false,
        AdressImage: ""
    };
    public myOptions: ClassOptions = {
        id_parameters: 0,
        RGB: "",
        Light: false,
        AdressImage: ""
    };
    public r: number = 0;
    public g: number = 0;
    public b: number = 0;

    constructor(private _recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    lightState() {
        this.myOptions.Light = !this.myOptions.Light;
    }

    private getOptionsItems(): void {
        this._recipeService.getOptions().subscribe(
            (option) => {
                this.otherOptions = option.json();
            },
            error => console.log(error),
            () => console.log('Get all Options complete'));
    }

    private setOptionsItems() {
        this._recipeService.setOptions(this.myOptions).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set all Options complete'));
    }
}   
