// What a recipe looks like once it's been saved.
export interface Recipe {
  title: string;
  servings: number;
}

// The timing fields totalCookTime reads.
export interface RecipeTiming {
  status: "draft" | "published";
  prepMinutes: number;
  cookMinutes: number;
}
