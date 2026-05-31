import { Component } from '@angular/core';
import { IRecipeModel } from '../models/IRecipeModel';
import { RecipeService } from '../recipe-service';
import { RecipeComponent } from '../core/recipe-component/recipe-component';

@Component({
  selector: 'recipe-favourites-component',
  imports: [RecipeComponent],
  templateUrl: './favourites-component.html',
  styleUrl: './favourites-component.scss',
})
export class FavouritesComponent {
  constructor(private readonly recipeService: RecipeService) {}

  getFavoriteRecipes(): IRecipeModel[] {
    return this.recipeService.getFavoriteRecipes();
  }
}
