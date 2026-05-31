import { Injectable } from '@angular/core';
import { IRecipeModel } from './models/IRecipeModel';
import { Category } from './models/Category';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly recipes: IRecipeModel[] = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      category: Category.Dinner,
      prepTime: 30,
      servings: 4,
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      ingredients: ['200g spaghetti', '100g pancetta', '2 eggs', '50g Parmesan cheese', 'Black pepper'],
      image: 'https://www.budgetbytes.com/wp-content/uploads/2016/05/Spaghetti-Carbonara-Plated-500x500.jpg',
      isFavorite: false
    },
    {
      id: 2,
      name: 'Caesar Salad',
      category: Category.Lunch,
      prepTime: 20,
      servings: 2,
      description: 'Fresh romaine lettuce with Caesar dressing and croutons.',
      ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
      image: 'https://www.budgetbytes.com/wp-content/uploads/2024/03/Caesar-Salad-Plated-500x500.jpg',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Pancakes',
      category: Category.Breakfast,
      prepTime: 15,
      servings: 3,
      description: 'Fluffy homemade pancakes served with syrup.',
      ingredients: ['Flour', 'Milk', 'Eggs', 'Butter', 'Maple syrup'],
      image: 'https://www.tasteofhome.com/wp-content/uploads/2024/09/Buttermilk-Pancakes-TOHVP24_33639_MF_08_15_1.jpg',
      isFavorite: false
    },
    {
      id: 4,
      name: 'Chicken Biryani',
      category: Category.Dinner,
      prepTime: 60,
      servings: 5,
      description: 'Aromatic rice dish with chicken and spices.',
      ingredients: ['Rice', 'Chicken', 'Yogurt', 'Spices', 'Onions'],
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg',
      isFavorite: false
    },
    {
      id: 5,
      name: 'Beef Burger',
      category: Category.Lunch,
      prepTime: 25,
      servings: 2,
      description: 'Juicy grilled beef burger with cheese and lettuce.',
      ingredients: ['Burger buns', 'Beef patty', 'Cheese', 'Lettuce', 'Tomato'],
      image: 'https://angelbay.com/hubfs/2023%20-%20Angel%20Bay%20Website/Recipes/Images/780x750/Angus-Beef-and-Mushroom-Burger-Angel-Bay-Recipe-780x750.jpg',
      isFavorite: false
    },
    {
      id: 6,
      name: 'French Fries',
      category: Category.Snacks,
      prepTime: 20,
      servings: 3,
      description: 'Crispy golden potato fries.',
      ingredients: ['Potatoes', 'Salt', 'Oil'],
      image: 'https://www.kuchpakrahahai.in/wp-content/uploads/2023/05/Air-fried-french-fries.jpg',
      isFavorite: false
    },
    {
      id: 7,
      name: 'Chocolate Cake',
      category: Category.Dessert,
      prepTime: 50,
      servings: 8,
      description: 'Rich and moist chocolate cake.',
      ingredients: ['Flour', 'Cocoa powder', 'Eggs', 'Sugar', 'Butter'],
      image: 'https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800',
      isFavorite: false
    },
    {
      id: 8,
      name: 'Grilled Salmon',
      category: Category.Dinner,
      prepTime: 35,
      servings: 2,
      description: 'Perfectly grilled salmon fillets.',
      ingredients: ['Salmon', 'Lemon', 'Garlic', 'Olive oil'],
      image: 'https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg',
      isFavorite: false
    },
    {
      id: 9,
      name: 'Fruit Smoothie',
      category: Category.Breakfast,
      prepTime: 10,
      servings: 2,
      description: 'Healthy mixed fruit smoothie.',
      ingredients: ['Banana', 'Berries', 'Milk', 'Honey'],
      image: 'https://simplegreensmoothies.com/wp-content/uploads/Easy-Fruit-Smoothie-Recipes-Featured-1.jpg',
      isFavorite: false
    },
    {
      id: 10,
      name: 'Tacos',
      category: Category.Lunch,
      prepTime: 25,
      servings: 4,
      description: 'Mexican tacos filled with seasoned meat and vegetables.',
      ingredients: ['Taco shells', 'Chicken', 'Lettuce', 'Cheese', 'Salsa'],
      image: 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg',
      isFavorite: false
    },
    {
      id: 11,
      name: 'Ice Cream Sundae',
      category: Category.Dessert,
      prepTime: 10,
      servings: 2,
      description: 'Vanilla ice cream with chocolate syrup.',
      ingredients: ['Ice cream', 'Chocolate syrup', 'Nuts'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/StrawberrySundae.jpg',
      isFavorite: false
    },
    {
      id: 12,
      name: 'Fried Rice',
      category: Category.Dinner,
      prepTime: 30,
      servings: 4,
      description: 'Classic fried rice with vegetables.',
      ingredients: ['Rice', 'Eggs', 'Carrots', 'Peas', 'Soy sauce'],
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2024/02/Best-Shrimp-Fried-Rice-Recipe.jpg',
      isFavorite: false
    },
    {
      id: 13,
      name: 'Club Sandwich',
      category: Category.Lunch,
      prepTime: 15,
      servings: 2,
      description: 'Triple layered sandwich with chicken and vegetables.',
      ingredients: ['Bread', 'Chicken', 'Lettuce', 'Tomato', 'Mayonnaise'],
      image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/club_sandwich_16496_16x9.jpg',
      isFavorite: false
    },
    {
      id: 14,
      name: 'Donuts',
      category: Category.Dessert,
      prepTime: 40,
      servings: 6,
      description: 'Soft glazed donuts.',
      ingredients: ['Flour', 'Sugar', 'Milk', 'Butter'],
      image: 'https://myurbantreats.com/wp-content/uploads/2022/01/Donuts-with-chocolate-glaze-500x500.jpg',
      isFavorite: false
    },
    {
      id: 15,
      name: 'Omelette',
      category: Category.Breakfast,
      prepTime: 10,
      servings: 1,
      description: 'Cheese omelette with herbs.',
      ingredients: ['Eggs', 'Cheese', 'Butter', 'Parsley'],
      image: 'https://www.healthyfood.com/wp-content/uploads/2018/02/Basic-omelette.jpg',
      isFavorite: false
    },
    {
      id: 16,
      name: 'Pizza Margherita',
      category: Category.Dinner,
      prepTime: 45,
      servings: 4,
      description: 'Classic pizza with mozzarella and basil.',
      ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil'],
      image: 'https://bakingmischief.com/wp-content/uploads/2016/03/homemade-margherita-pizza-3.jpg',
      isFavorite: false
    },
    {
      id: 17,
      name: 'Chicken Wings',
      category: Category.Snacks,
      prepTime: 35,
      servings: 4,
      description: 'Spicy crispy chicken wings.',
      ingredients: ['Chicken wings', 'Hot sauce', 'Butter'],
      image: 'https://easychickenrecipes.com/wp-content/uploads/2023/08/featured-buffalo-wings-recipe.jpg',
      isFavorite: false
    },
    {
      id: 18,
      name: 'Mango Pudding',
      category: Category.Dessert,
      prepTime: 20,
      servings: 3,
      description: 'Creamy mango flavored pudding.',
      ingredients: ['Mango', 'Milk', 'Sugar', 'Gelatin'],
      image: 'https://www.sharmispassions.com/wp-content/uploads/2022/06/MangoPudding5.jpg',
      isFavorite: false
    },
    {
      id: 19,
      name: 'Sushi',
      category: Category.Lunch,
      prepTime: 50,
      servings: 4,
      description: 'Japanese sushi rolls with rice and fish.',
      ingredients: ['Sushi rice', 'Nori', 'Salmon', 'Cucumber'],
      image: 'https://cdn7.kiwilimon.com/recetaimagen/36724/640x640/45807.jpg.webp',
      isFavorite: false
    },
    {
      id: 20,
      name: 'Nachos',
      category: Category.Snacks,
      prepTime: 15,
      servings: 3,
      description: 'Loaded nachos with cheese and salsa.',
      ingredients: ['Tortilla chips', 'Cheese', 'Salsa', 'Jalapenos'],
      image: 'https://www.emborg.com/app/uploads/2023/07/1200x900px_3_Step_Nachos_Snack.png',
      isFavorite: false
    }
  ];

  favoriteRecipes: IRecipeModel[] = [];

  getRecipes(): IRecipeModel[] {
    return this.recipes;
  }

  getRecipeById(id: number): IRecipeModel | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addToFavorites(recipe: IRecipeModel): void {
    recipe.isFavorite = true;
    this.favoriteRecipes.push(recipe);
  }

  getFavoriteRecipes(): IRecipeModel[] {
    return this.favoriteRecipes;
  } 
}
