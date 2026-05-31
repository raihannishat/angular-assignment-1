import { Routes } from '@angular/router';
import { FavouritesComponent } from './favourites-component/favourites-component';
import { HomeComponent } from './home-component/home-component';
import { RecipeDetailComponent } from './recipe-detail-component/recipe-detail-component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'recipe', component: RecipeDetailComponent
    },
    {
        path: 'favorites', component: FavouritesComponent
    }
];
