import { Recipe } from "@/types/recipe";

import RecipeItem from "./recipe-item";

interface RecipeListProps {
  searchParams: {
    q: string;
  };
}

export default async function RecipeList({ searchParams }: RecipeListProps) {
  const url = new URL("https://api.edamam.com/search");
  url.searchParams.set("q", searchParams.q);
  url.searchParams.set("app_id", process.env.EDAMAM_APP_ID!);
  url.searchParams.set("app_key", process.env.EDAMAM_APP_KEY!);

  const res = await fetch(url.toString());
  const json = await res.json();

  const recipes: Recipe[] = json.hits.map((hit: any) => hit.recipe);

  return (
    <div className="flex flex-wrap gap-8">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.uri} recipe={recipe} />
      ))}

      {recipes.length === 0 && (
        <p className="w-full text-center text-2xl font-bold">
          Tidak ada resep yang ditemukan
        </p>
      )}
    </div>
  );
}
