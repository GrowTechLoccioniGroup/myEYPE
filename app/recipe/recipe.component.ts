import { Component, OnInit }  from '@angular/core';
import { NgClass }            from '@angular/common';
import { ClassRecipe }        from '../classes/class.recipe';
import { RecipeCallsService } from './calls/calls.service';

@Component({
    templateUrl: 'app/recipe/recipe.component.html',
    providers: [RecipeCallsService],
    directives: [NgClass]
})
export class RecipeComponent implements OnInit {
    private select: number = 0;
    private light: string[] = [ '' ];
    private ServerRecipes: ClassRecipe[] = [
        { id_recipe: 0, Name: '', AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0.0, PH: 0.0, Conductivity: 0, RGB: '', Light: false }
    ];
    private ClientRecipe: ClassRecipe = {
        id_recipe: 0,
        Name: '',
        AirTemperature: 0.0,
        WaterTemperature: 0.0,
        Humidity: 0,
        PH: 0.0,
        Conductivity: 0,
        RGB: '',
        Light: false
    };

    constructor(private calls: RecipeCallsService) { }

    ngOnInit() {
        this.getRecipes();
    }

    private selectedRow(recipe: ClassRecipe, light: string) {
        this.select = recipe.id_recipe;
        this.ClientRecipe = recipe;
        if (light == 'accesa') {
            this.ClientRecipe.Light = true;
        } else {
            this.ClientRecipe.Light = false;
        }
    }

    private getRecipes() {
        this.calls.GetAllRecipes().subscribe(
            (recipe) => {
                this.ServerRecipes = recipe.json();
            },
            error => console.log(error),
            () => console.log('Get all recipes complete!'));

        for (let i = 0; i < this.ServerRecipes.length; i++) {
            if (this.ServerRecipes[i].Light == true) {
                this.light[i] = 'accesa';
            } else {
                this.light[i] = 'spenta';
            }
        }
    }

    private setRecipe() {
        this.calls.SetRecipe(this.ClientRecipe).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set recipe complete!'));
    }
}