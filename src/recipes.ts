import type { Recipe } from "./types";

const recipes: Recipe[] = [];

export function addRecipe(recipe: Recipe): Recipe {
  recipes.push(recipe);
  return recipe;
}
