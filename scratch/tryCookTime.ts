// Run from recipe-box/ with:  npx tsx scratch/tryCookTime.ts
import { totalCookTime } from "../src/totalCookTime";

// The recipes arrive the way a request body or a saved file would: as text,
// parsed while the program runs. TypeScript can't see what's inside.
const recipes = JSON.parse(`[
  { "status": "published", "prepMinutes": 10, "cookMinutes": 20 },
  { "status": "draft", "prepMinutes": 5, "cookMinutes": 15 }
]`);

console.log(totalCookTime(recipes));
