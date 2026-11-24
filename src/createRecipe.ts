import { addRecipe } from "./recipes";
import type { Recipe } from "./types";

// Backs POST /recipes: the request body arrives as a string, gets parsed,
// and goes straight to addRecipe.
export function createRecipe(requestBody: string): Recipe {
  return addRecipe(JSON.parse(requestBody));
}
