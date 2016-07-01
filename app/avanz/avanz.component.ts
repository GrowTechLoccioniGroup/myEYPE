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
    public rS: string = "";
    public gS: string = "";
    public bS: string = "";

    public r: number = 0;
    public g: number = 0;
    public b: number = 0;

    constructor(private _recipeService: RecipeService) {
    }

    ngOnInit() {
        this.getOptionsItems();
    }

    /*lightState() {
        this.myOptions.Light = !this.myOptions.Light;
    }*/

    private getOptionsItems(): void {
        this._recipeService.getOptions().subscribe(
            (option) => {
                console.log("DONE");
                this.otherOptions = option.json();
                     let x = this.otherOptions.RGB.split("-");
                    console.log(x);
                    this.r = parseInt(x[0]);
                    console.log(this.r);
                    this.g = parseInt(x[1]);
                    console.log(this.g);
                    this.b = parseInt(x[2]);
                    console.log(this.b);
            },
            error => console.log(error),
            () => console.log('Get all Options complete'));
       
       /* if (this.otherOptions.RGB.length > 3) {
            let x = this.otherOptions.RGB.split("-");
            this.r = parseInt(x[0]);
            this.g = parseInt(x[1]);
            this.b = parseInt(x[2]);
        }*/

    }

    private setOptionsItems() {
        this.myOptions.RGB = this.r + "-" + this.g + "-" + this.b;
        this._recipeService.setOptions(this.myOptions).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set all Options complete'));
    }
}   
