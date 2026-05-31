import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { IRecipeModel } from '../../models/IRecipeModel';

@Component({
  selector: 'recipe-recipe-component',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.scss',
})
export class RecipeComponent {
  @Input() recipe!: IRecipeModel;
  @Output() addToFavourites = new EventEmitter<IRecipeModel>();

  onAddToFavourites(favouriteRecipe: IRecipeModel) {
    this.addToFavourites.emit(favouriteRecipe);
  } 
}
