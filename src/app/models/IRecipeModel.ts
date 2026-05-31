export interface IRecipeModel {
    id: number;
    name: string;
    category: string;
    prepTime: number; // in minutes
    servings: number;
    description: string;
    ingredients: string[];
    image: string; // image file name
    isFavorite: boolean;
}