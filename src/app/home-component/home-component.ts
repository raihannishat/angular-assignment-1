import { Component } from '@angular/core';
import { RecipeComponent } from "../core/recipe-component/recipe-component";
import { RecipeService } from '../recipe-service';
import { IRecipeModel } from '../models/IRecipeModel';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'recipe-home-component',
  imports: [RecipeComponent, MatAnchor, MatButtonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  recipes: IRecipeModel[] = [];
  recipeFilter: string = '';

  constructor(private readonly recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }

  getFilteredRecipes(): IRecipeModel[] {
    return this.recipeFilter === '' ? 
      this.recipes : this.recipes.filter(recipe => recipe.category === this.recipeFilter);
  }

  addToFavourites(recipe: IRecipeModel): void {
    this.recipeService.addToFavorites(recipe);
  }
}
