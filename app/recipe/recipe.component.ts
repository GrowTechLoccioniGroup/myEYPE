import { Component, OnInit } from '@angular/core';
import { ClassRecipe } from '../classes/class.recipe';
import { RecipeService } from '../recipe/recipe.service';

@Component({
    selector: 'my-recipe',
    providers: [RecipeService],
    templateUrl: 'app/recipe/recipe.component.html',
    styleUrls: ['app/recipe/recipe.component.css']
})

export class RecipeComponent implements OnInit {
    private otherRecipes: ClassRecipe[];
    private myRecipe: ClassRecipe = {
        id_recipe: 0,
        Name: "",
        AirTemperature: 0.0,
        WaterTemperature: 0.0,
        Humidity: 0,
        PH: 0.0,
        Conductivity: 0,
        RGB: "",
        Light: false
    };

    constructor(private _recipeService: RecipeService) {
    }

    ngOnInit() {
        this.getRecipesItems();
    }

    selectedRow(recipe) {
        this.myRecipe = recipe;
    }

    private getRecipesItems(): void {
        this._recipeService.getRecipes().subscribe(
            (recipe) => {
                this.otherRecipes = recipe.json();
            },
            error => console.log(error),
            () => console.log('Get all RECIPES complete!'));
    }

    private setRecipe() {
        this._recipeService.setRecipe(this.myRecipe).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set all PARAMETERS complete!'));
    }
}