import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Component({
    selector: 'my-shutdown',
    providers: [RecipeService],
    template: '<div class="row"><h1 class="text-center">Spegnimento in corso. Attendere...</h1></div>'
})

export class ShutdownComponent implements OnInit {

    constructor(private _recipeService: RecipeService) {
    }

    ngOnInit () {
        this.getShutdown();
    }

    private getShutdown(): void {
        this._recipeService.getShutdown().subscribe(
            (shutdown) => {
                console.log("DONE");
            },
            error => console.log(error),
            () => console.log('Get shutdown complete!'));
    }

}