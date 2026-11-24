import type { RecipeTiming } from "./types";

export function totalCookTime(recipes: RecipeTiming[]): number {
  return recipes.reduce((total, recipe) => {
    if (recipe.status === "published") {
      return total + recipe.prepMinutes + recipe.cookMinutes;
    }
    return total;
  }, 0);
}
