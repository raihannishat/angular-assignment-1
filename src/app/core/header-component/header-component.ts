import { Component, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { RecipeService } from '../../recipe-service';

@Component({
  selector: 'recipe-header-component',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  protected readonly title = signal('Recipe App');

  constructor(private readonly recipeService: RecipeService) {}

  getFavoriteCount(): number {
    return this.recipeService.getFavoriteRecipes().length;
  }
}
