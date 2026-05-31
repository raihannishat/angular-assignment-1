import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RecipeService } from '../recipe-service';
import { IRecipeModel } from '../models/IRecipeModel';

@Component({
  selector: 'recipe-recipe-detail-component',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './recipe-detail-component.html',
  styleUrl: './recipe-detail-component.scss',
})
export class RecipeDetailComponent {
  recipe?: IRecipeModel;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipeService: RecipeService
  ) {
    this.route.queryParamMap.subscribe((params) => {
      const id = Number.parseInt(params.get('id') || '0');
      this.recipe = this.recipeService.getRecipeById(id);
    });
  }
}
