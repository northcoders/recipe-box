# Recipe Box

A tiny recipe-saving API in TypeScript, used in the Northcoders AI tool fluency workshop. It's deliberately small and has some rough edges: you'll explore them with AI tools during the session.

## Setup

You need Node 22.13 or newer.

```
npm install
npm test             # Vitest
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
```

## What's in it

- `src/types.ts`: the `Recipe` type
- `src/recipes.ts`: an in-memory store of recipes
- `src/createRecipe.ts`: handles a "create recipe" request body
- `src/totalCookTime.ts`: works out a recipe's total time (with a test)
- `src/recipeUtils.ts`: empty, for now
- `scratch/tryCookTime.ts`: run it with `npx tsx scratch/tryCookTime.ts`
